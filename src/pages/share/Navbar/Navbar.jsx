import React from 'react';
import img from '../../../assets/template.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navOptions = <>

        <Link>
            <li> <a>Home</a> </li>
        </Link>

        <Link>
            <li> <a>Instructors</a> </li>
        </Link>

        <Link>
            <li> <a>Classes</a> </li>
        </Link>

        <Link>
            <li> <a>DashBoard</a> </li>
        </Link>

        <Link>
            <li> <a>Login</a> </li>
        </Link>

        <Link>
            <li> <a>Log Out</a> </li>
        </Link>

        <Link>
            <li>
                <a>
                    <div className="avatar  ">
                        <div className="w-[40px] rounded-full">
                            <img src={img} />
                        </div>
                    </div>
                </a>
            </li>
        </Link>

    </>

    return (
        <div>
            <div className="navbar bg-black text-white opacity-60 py-2 px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <img className='w-40 rounded-3xl' src={img} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;