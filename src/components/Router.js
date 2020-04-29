import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import Main from "./Main";

const Router = () => (

    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>

);
export default Router;