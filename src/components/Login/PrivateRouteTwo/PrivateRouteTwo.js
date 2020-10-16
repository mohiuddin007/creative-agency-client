import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRouteTwo = ({ children, ...rest }) => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const [isAdmin, setIsAdmin] = useState(false);

   useEffect(() => {
       fetch('https://immense-island-63375.herokuapp.com/adminCheck', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ email: loggedInUser.email })
       })
           .then(res => res.json())
           .then(data => {
               setIsAdmin(data);
           })
   }, [])
    return (
        <div>
            <Route
             {...rest}
             render={({ location }) =>
            ( isAdmin.email || sessionStorage.getItem('token'))? (
             children
             ) : (
             <Redirect
                 to={{
                 pathname: "/login",
                 state: { from: location }
               }}
            />
            )
           }
        />
        </div>
    );
};

export default PrivateRouteTwo;