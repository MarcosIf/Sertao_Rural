import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignIn    from '../pages/Login';
import Register  from '../pages/Register';


const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path = "/Register" component={Register} /> 
        <Route path = "/" component={SignIn}  />
               
    </Switch>

);

export default AuthRoutes;