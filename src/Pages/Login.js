// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const signIn = () => {

        if (error) {
            return (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            );
        }
        if (loading) {
            return <p>Loading...</p>;
        }
        if (user) {
            return (
                <div>
                    <p>Signed In User: {user.email}</p>
                </div>
            );
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <button onClick={() => signInWithGoogle()} className="btn">Google</button>
        </div>
    );
};

export default Login;
