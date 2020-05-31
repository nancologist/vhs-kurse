import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout.js";
import Home from './components/Home/Home.js';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/courses" component={Layout}/>
                    <Route path="/" exact component={Home}/>
                    <Route render={() => <h1>[App.js] Page Not Found Placeholder.</h1>}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
