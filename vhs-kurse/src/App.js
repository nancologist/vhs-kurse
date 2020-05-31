import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout.js";
import Home from './components/Home/Home.js';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/courses" component={Layout}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
