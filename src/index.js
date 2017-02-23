import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Timer from './components/Timer';
import Countdown from './components/Countdown';
import  './style/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const repo = `/${window.location.pathname.split('/')[1]}`;

ReactDOM.render(
  <Router history={browserHistory} basename={repo}>
    <Route path='/' component={App}>
      <Route path='countdown' component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
