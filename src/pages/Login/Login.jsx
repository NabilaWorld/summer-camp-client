import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaRegEye } from 'react-icons/fa';
import './Login.css'
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordShow = () => {
    setShowPassword(!showPassword);
  };

  const {signIn} = useContext(AuthContext);

  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
}

  return (
    <div className='container md:ml-8 rounded-lg'>
      <h1 className='text-center text-white my-10 font-bold text-5xl'>Log In</h1>

      <form onSubmit={handleLogIn} className="max-w-xs mx-auto bg-slate-100 p-10 my-10 rounded-lg">
        {/* email */}
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

        {/* password */}
        <div className="mb-4">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="input input-bordered mt-1 block w-full pr-12"
              placeholder="Enter your password"
              required
            />

            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={passwordShow}
            >
              
              {showPassword ? (
                <FaEye></FaEye>
              ) : (
                <FaRegEye className='text-blue-400'></FaRegEye>
              )}
            </div>

          </div>
        </div>

        <div className="mt-6">
          <input onC className="btn btn-primary w-full" type="submit" value="Log In" />
        </div>
      </form>

      <h1 className='text-center my-5 pb-5 font-bold text-white'>Are You New Here? First <Link className='text-blue-500' to='/signup'>Sign Up</Link> </h1>


        </div>
    );
};

export default Login;