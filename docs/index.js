import './index.scss';

import reactDocJson from './__generated/react-doc.json';

import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';

import { hashHistory } from 'react-router';

import ReactDoc from './components/ReactDoc';
import ReactDocMain from './components/ReactDocMain';

import {
  Router,
  Route,
  IndexRoute
} from 'react-router';

const siteUrlBase = window.location.origin + (window.location.pathname).replace('index.html', '');

const previewConfig = {
  styles: [
    `${siteUrlBase}assets/components.css`
  ],
  scripts: [
    `${siteUrlBase}assets/vendor.js`,
    `${siteUrlBase}assets/components.js`
  ]
};

class Root extends React.Component {

  static propTypes = {
    children: React.PropTypes.node
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  _onMenuItemClick = (groupName, componentName) => {
    const router = this.context.router;
    if (componentName) {
      router.push(`/${groupName}/${componentName}`);
    } else if (groupName) {
      router.push(`/${groupName}`);
    } else {
      router.push('/');
    }
  };

  render() {
    return (
      <ReactDoc
        onMenuItemClick={this._onMenuItemClick}
        reactDocJson={reactDocJson}
      >
        {cloneElement(this.props.children, {
          reactDocJson,
          previewConfig
        })}
      </ReactDoc>
    );
  }
}

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route
      path='/'
      component={Root}
    >
      <IndexRoute component={ReactDocMain} />
      <Route
        path=':groupName'
        component={ReactDocMain}
      />
      <Route
        path=':groupName/:componentName'
        component={ReactDocMain}
      />
    </Route>
  </Router>),
  global.document.getElementById('root')
);
