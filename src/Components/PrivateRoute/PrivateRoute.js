import React, { useContext, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.userMail ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/Login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;