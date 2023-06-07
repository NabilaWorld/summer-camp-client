import React, { useContext } from 'react';
import img from '../../../assets/template.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {

    const { user, logOut, setUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
            setUser(null)
    }



    const navOptions = <>

        <Link to='/'>
            <li className='font-bold'> <a>Home</a> </li>
        </Link>

        <Link>
            <li className='font-bold'> <a>Instructors</a> </li>
        </Link>

        <Link>
            <li className='font-bold'> <a>Classes</a> </li>
        </Link>

        <Link>
            <li className='font-bold'> <a>DashBoard</a> </li>
        </Link>

        {
            user ?
                <>

                    <button onClick={handleLogOut} className="btn btn-active btn-warning">Log Out</button>



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

                :

                <>
                    <Link to='/login'>
                        <li className='font-bold'> <a>Login</a> </li>
                    </Link>
                </>
        }

    </>

    return (
        <div>
            <div className="navbar bg-black relative z-10 text-white opacity-60 py-2 px-5">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>

                    </div>

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