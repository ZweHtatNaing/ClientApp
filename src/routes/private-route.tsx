import React from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router';
import {authenticate}  from '../app-services/auth-services';

export interface RouteProps {
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: ((props: RouteComponentProps<any>) => React.ReactNode);
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
}

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
    if (!Component) return null;
    const authenicate = authenticate();
    return (
    <Route {...rest} render={((props: RouteComponentProps<{}>) => authenicate ? (<Component {...props} />):(<Redirect to='/login'/>) )}/>
    )
};
export default PrivateRoute;