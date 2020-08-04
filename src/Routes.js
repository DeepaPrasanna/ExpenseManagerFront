import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import LoginForm from './components/LoginForm/LoginForm.js';
import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/Login" component={LoginForm} />
                </Switch>
            </Router>
        )
    }
}