import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignUp = () => {
        googleLogIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);


                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://b7a12-summer-camp-server-side-steel.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true });
                    })


            })
    }

    return (
        <div>
            <center>
                <button onClick={handleGoogleSignUp} className='btn btn-primary '> <FaGoogle></FaGoogle> Google Sign Up</button>
            </center>
        </div>

    );
};

export default SocialLogin;