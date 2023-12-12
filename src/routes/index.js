import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Accept from "../pages/Accept";
import WhoYouAre from "../pages/WhoYouAre";
import Drawn from "../pages/Drawn";
import Suggestions from "../pages/Suggestions";

const RoutesApp = () => {
    return (
        <Switch>
            <Route path='/suggestions' component={Suggestions} />
            <Route path='/drawn/:name' component={Drawn} />
            <Route path='/who-you-are' component={WhoYouAre} />
            <Route path='/accept' component={Accept} />
            <Route exact path='/welcome' component={Welcome} />
            <Route path='/' component={Welcome} />
            <Route path='*' component={Welcome} />
        </Switch>
    );
};

export default RoutesApp;
