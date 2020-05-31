import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout.js";
import Home from './components/Home/Home.js';
import error404 from "./components/error404/error404";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/courses" component={Layout}/>
                    <Route path="/" exact component={Home}/>
                    <Route component={error404}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
