import React from 'react'
import { Home, Login, Register } from '../pages'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/register" component={Register} exact/>
                <Route path="/home" component={Home} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
