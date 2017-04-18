import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Error404} from './Error404'
import './index.css';
import 'bulma/css/bulma.css';
import {Router, Route, hashHistory} from 'react-router'

ReactDOM.render(
    <div className="container">
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="*" component={Error404}/>
    </Router>
</div>, document.getElementById('root'));