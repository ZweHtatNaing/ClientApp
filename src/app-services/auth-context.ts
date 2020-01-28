import React, { createContext, useContext } from 'react'
import {authenticate} from './auth-services';

export const AuthContext = React.createContext({
    authenticated: authenticate()
});

export const AuthContextConsumer = AuthContext.Consumer;