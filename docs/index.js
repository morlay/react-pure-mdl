import './index.scss';

import reactDocJson from './__generated/react-doc.json';
import _ from 'lodash';

import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';

import createHistory from 'history/lib/createHashHistory';

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
  }

  static contextTypes = {
    history: React.PropTypes.object
  }

  _onMenuItemClick(groupName, componentName) {
    const history = this.context.history;
    if (componentName) {
      history.pushState(null, `/${groupName}/${componentName}`);
    } else if (groupName) {
      history.pushState(null, `/${groupName}`);
    } else {
      history.pushState(null, `/`);
    }
  }

  render() {
    return (
      <ReactDoc
        onMenuItemClick={this._onMenuItemClick.bind(this)}
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
  (<Router history={createHistory()}>
    <Route
      path='/'
      component={Root}
    >
      <IndexRoute component={ReactDocMain}/>
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
