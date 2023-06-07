import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

const SignUp = () => {
    return (
        <div className='containers md:ml-8 rounded-lg'>

            <h1 className='text-center my-10 font-bold text-5xl'>Log In</h1>

            <form className="max-w-xs mx-auto bg-slate-100 p-10 my-10 rounded-lg">
                <div className="mb-4">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Name</label>
                    <input
                        id="name"
                        type="name"
                        name="name"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Enter your password"
                        required
                    />
                </div>


                {/*Confirm password Password */}

                <div className="mb-4">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Confirm your password"
                        required
                    />
                </div>


                <div className="mb-4">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Photo URL</label>
                    <input
                        id="text"
                        type="password"
                        name="password"
                        className="input input-bordered mt-1 block w-full"
                        placeholder="Enter your Photo Url"
                        required
                    />
                </div>

                <div className="mt-6">
                    <input className="btn btn-primary w-full" type="submit" value="Log In" />
                </div>
            </form>

            <h1 className='text-center my-5 font-bold pb-5 text-white'>If you have account already? So <Link className='text-blue-500' to='/login'>Log In</Link> </h1>

        </div>
    );
};

export default SignUp;