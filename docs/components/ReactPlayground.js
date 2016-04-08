import './ReactPlayground.scss';

import React from 'react';
import * as babel from 'babel-core/lib/api/browser';

import babelPresetEs2015 from 'babel-preset-es2015';
import babelPresetStage0 from 'babel-preset-stage-0';
import babelPresetReact from 'babel-preset-react';

import CodeMirrorEditor from './CodeMirrorEditor';
import ReactPreview from './ReactPreview';

import Card, { CardTitle, CardActions } from 'src/cards/Card';
import Textfield from 'src/textfields/Textfield';
import { LayoutSpacer } from 'src/layout/Layout';
import Button from 'src/buttons/Button';
import Shadow from 'src/effects/Shadow';

const PropTypes = React.PropTypes;

class ReactPlayground extends React.Component {

  static propTypes = {
    codeText: PropTypes.string.isRequired,
    previewConfig: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      width: 320,
      height: 320,
      codeText: props.codeText,
      showCode: false
    };
  }

  componentDidMount() {
    this.executeCode();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.codeText !== nextProps.codeText) {
      this.setState({
        codeText: nextProps.codeText
      }, () => {
        this.executeCode();
      });
    }
  }

  componentDidUpdate() {
    clearTimeout(this.timeoutID);
  }

  setTimeout(...args) {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(...args);
  }

  executeCode() {
    try {
      const compiledCodeText = babel.transform(this.state.codeText, {
        sourceMaps: 'inline',
        presets: [
          babelPresetEs2015,
          babelPresetStage0,
          babelPresetReact
        ]
      }).code;

      if (compiledCodeText) {
        this.setState({
          compiledCodeText
        });
      }
    } catch (err) {
      this.setTimeout(() => {
        console.error(err);
      }, 500);
    }
  }

  _onCodeToggle(evt) {
    evt.preventDefault();
    this.setState({
      showCode: !this.state.showCode
    });
  }

  handleCodeChange(value) {
    this.setState({
      codeText: value
    }, () => {
      this.executeCode();
    });
  }

  handleSizeChange(size) {
    this.setState(size);
  }

  resizeWidth = (evt) => {
    this.setState({
      width: parseInt(evt.target.value, 10)
    });
  };

  resizeHeight = (evt) => {
    this.setState({
      height: parseInt(evt.target.value, 10)
    });
  };

  render() {
    return (
      <Shadow level={1}>
        <div className='ReactPlayground'>
          <Card>
            <CardTitle>
              <ReactPreview
                width={this.state.width}
                height={this.state.height}
                previewConfig={this.props.previewConfig}
                codeString={this.state.compiledCodeText}
                onSizeChange={size => this.handleSizeChange(size)}
              />
            </CardTitle>
            {this.state.showCode ? <CodeMirrorEditor
              key='jsx'
              onChange={(e) => this.handleCodeChange(e)}
              codeText={this.state.codeText}
            /> : null}
            <CardActions border>
              <Button onClick={(e) => this._onCodeToggle(e)}>
                {this.state.showCode ? 'hide code' : 'show code'}
              </Button>
              <LayoutSpacer />
              <span>
                <Textfield
                  floatingLabel
                  label='Width:'
                  name='width'
                  type='number'
                  value={this.state.width}
                  onChange={this.resizeWidth}
                />
                &nbsp;
                <Textfield
                  floatingLabel
                  label='Height:'
                  name='width'
                  type='number'
                  value={this.state.height}
                  onChange={this.resizeHeight}
                />
              </span>
            </CardActions>
          </Card>
        </div>
      </Shadow>
    );
  }
}


export default ReactPlayground;
