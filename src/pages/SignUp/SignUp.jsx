import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../share/SocialLogIn/SocialLogin';
import { useState } from 'react';



const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [confirmPassword, setConfirmPassword] = useState('');

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmit = data => {


        if (data.password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        // const saveUser = {name: data.name, email: data.email}
                        const saveUser = {name: data.name, email: data.email, role:'student'}
                        fetch('https://b7a12-summer-camp-server-side-steel.vercel.app/users',{
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    navigate('/login')
                                }
                            })

                    })
                    .catch(error => console.log(error))

            })
    };




    return (
        <div className='containers  rounded-lg'>

            <h1 className='text-center text-white my-10 font-bold text-5xl'>Register</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-xs mx-auto bg-slate-100 p-10 my-10 rounded-lg">

                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Name</label>
                    <input
                        id="name"
                        type="name"
                        {...register("name", { required: true })}
                        name="name"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Enter your name"

                    />
                    {errors.name && <span className='text-red-500'>Name field is required</span>}
                </div>

                {/* Email */}

                <div className="mb-4">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", { required: true })}
                        name="email"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Enter your email"

                    />
                    {errors.email && <span className='text-red-500'>Email field is required</span>}
                </div>

                {/* password */}

                <div className="mb-4">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/
                        })}
                        name="password"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Enter your password"

                    />
                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}

                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password atleast 6 characters</p>}

                    {errors.password?.type === 'pattern' && <p className='text-red-500'>Password atleast one capital letter and one special character</p>}
                </div>


                {/* Confirm Password */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        name="confirmPassword"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Confirm your password"
                    />
                    {errors.confirmPassword?.type === 'required' && <p className='text-red-500'>Confirm Password is required</p>}

                    {errors.confirmPassword?.type === 'validate' && <p className='text-red-500'>Passwords do not match</p>}
                </div>


                {/* Photo URL */}
                <div className="mb-4">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Photo URL</label>
                    <input
                        id="text"
                        type="photoURL"
                        {...register("photoURL", { required: true })}
                        name="photoURL"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Enter your Photo Url"

                    />
                    {errors.photoURL?.type === 'required' && <p className='text-red-500'>Photo-Url is required</p>}
                </div>

                <div className="mt-6">
                    <input className="btn btn-primary w-full" type="submit" value="Sign Up" />
                </div>
            </form>

            <SocialLogin></SocialLogin>

            <h1 className='text-center my-5 font-bold pb-5 text-white'>If you have account already? So <Link className='text-blue-500' to='/login'>Log In</Link> </h1>

        </div>
    );
};

export default SignUp;