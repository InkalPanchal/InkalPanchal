import React from 'react';
import {Redirect,  Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const GourdedRoute = ({ component: Component, auth, ...rest}) => (
    <Route {...rest} render={(props)=>(auth===true ? <Component {...props} /> : <Redirect to='/' />)} />
)

export default GourdedRoute;