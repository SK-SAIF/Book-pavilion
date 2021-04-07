import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const user = result.user;
                const newUser = { ...user };
                newUser.userName = user.displayName;
                newUser.userMail = user.email;
                setUser(newUser);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div>
            <h1>Welcome to Login</h1>
            <Button onClick={handleGoogleLogin} variant="danger" size="lg" block>
                Login With Google
            </Button>
        </div>
    );
};
export default Login;