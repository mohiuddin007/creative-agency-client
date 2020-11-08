import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import google from '../../../images/google.png';
import './Login.css';
import firebaseConfig from './firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)
    }

    var googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSign = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {
                isSignedIn: 'true',
                name: displayName,
                 email: email
                };
                setLoggedInUser(signedInUser);
                setUserIdToken();
               
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    const setUserIdToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          })
          .catch(function(error) {
            // Handle error
          });
    }

    // const signOutBtn = () => {
    //     firebase.auth().signOut().then(function() {
    //         const logOut = {
    //             isSignedIn: "false",
    //             name: " ",
    //             email: " "
    //         }
    //         sessionStorage.removeItem('token');
    //         setLoggedInUser(logOut);
    //       })
    //       .catch(function(error) {
    //         // An error happened.
    //       });
    // }
    return (
        <div>
            <div className="container mt-5 pt-5">
                <Link to="/">
                <img src={logo} className="mx-auto d-block logoSize" alt="logo"/>
                </Link>
                <div className="row p-5 mt-5 justify-content-center align-items-center">
                    <div className="col-md-6 p-5 border border-secondary">
                        <h2 className="text-center">Login With</h2>
                        <div className="row justify-content-center border border-secondary rounded-pill my-4 mx-2 cursor">
                            <div className="col-md-2" onClick={handleGoogleSign}>
                                <img src={google} className="logoSizing" alt="google"/>
                            </div>
                            <div className="col-md-8" onClick={handleGoogleSign}>
                                 <h4>Login With Google</h4>
                            </div>
                        </div>
                        <p className="text-center">Don't have an account?<span><a href="/login">Create a new account</a></span></p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;