import React, {Component} from 'react';
import {BrowserRouter, withRouter, Route, Redirect} from 'react-router-dom';

import Home from "../pages/home/Home";
import Test from "../pages/test/Test";

export default class MyRouter extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    {/*<Route path="/test" component={Test}/>*/}
                </div>
            </BrowserRouter>
        )
    }
}