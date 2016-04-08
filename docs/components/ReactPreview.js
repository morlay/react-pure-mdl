import './ReactPreview.scss';

import React from 'react';
import { findDOMNode } from 'react-dom';
import query from 'dom-helpers/query';

import Resizable from './Resizable';

const PropTypes = React.PropTypes;

class ReactPreview extends React.Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    codeString: PropTypes.string,
    previewConfig: PropTypes.object,
    onSizeChange: PropTypes.func
  };

  static defaultProps = {
    previewConfig: {},
    onSizeChange: () => {
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height
    };
  }

  componentDidMount() {
    const offsetSize = query.offset(findDOMNode(this));
    setTimeout(() => {
      this.setState({
        width: offsetSize.width
      }, () => {
        this.refreshIframe(this.props);
        this.props.onSizeChange(this.state);
      });
    }, 20);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.width !== this.state.width || nextProps.height !== this.state.height) {
      this.setState({
        width: nextProps.width,
        height: nextProps.height
      });
    }
    if (nextProps.codeString !== this.props.codeString) {
      this.refreshIframe(nextProps);
    }
  }

  handleResize = (evt, { size }) => {
    this.setState(size, () => {
      this.props.onSizeChange(size);
    });
  };

  refreshIframe(props) {
    const iframe = findDOMNode(this.refs.iframe);

    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      iframeDoc.close();

      const styles = props.previewConfig.styles || [];
      const scripts = props.previewConfig.scripts || [];

      const headBlocks = [];
      const codeBlocks = [];

      styles.forEach((link) => {
        headBlocks.push(`<link rel='stylesheet' href='${link}'/> `);
      });

      scripts.forEach((link) => {
        codeBlocks.push(`<script src='${link}'></script>`);
      });

      const script = `
        (function() {
          var __components__ = ${props.previewConfig.components || 'components'};
          function defaultRequire(path) {
            return __components__[path].default || __components__[path];
          }
          (function(require, module, exports) {
            var React = require('react');
            var ReactDOM = require('react-dom');
            ${props.codeString}
            ReactDOM.render(
              React.createElement(exports.default || module.exports, {}, null),
              document.getElementById('root')
            )
          })(defaultRequire, {}, {});
        })();
      `;

      codeBlocks.push(`<script>${script}</script>`);

      iframeDoc.open();
      iframeDoc.write(`
        <html>
          <head>${headBlocks.join('\n')}</head>
          <body>
            <div id='root'></div>
            ${codeBlocks.join('\n')}
          </body>
        </html>
      `);
    }
  }


  render() {
    const state = this.state;

    const styles = {
      width: state.width,
      height: state.height
    };

    return (
      <div className='ReactPreview'>
        <Resizable
          width={state.width}
          height={state.height}
          onResize={this.handleResize}
        >
          <iframe
            ref='iframe'
            style={styles}
          />
        </Resizable>
      </div>
    );
  }
}

export default ReactPreview;
