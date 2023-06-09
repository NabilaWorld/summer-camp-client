import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { FaHome, FaWallet, FaCalendarAlt, FaSchool } from 'react-icons/fa';

const DashBoard = () => {

    const isAdmin = true;

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">


                        {
                            isAdmin ?

                                <>

                                    <li> <NavLink to='/dashboard/home'> <FaHome></FaHome>Admin Home</NavLink> </li>

                                    <li> <NavLink to='/dashboard/payment'> <FaWallet></FaWallet> Add Items</NavLink> </li>

                                    <li> <NavLink to='/dashboard/reservations'> <FaCalendarAlt></FaCalendarAlt> Manage Item</NavLink> </li>

                                    <li> <NavLink to='/dashboard/allusers'> <FaSchool></FaSchool> All Users</NavLink> </li>

                                </>


                                :

                                <>
                                    <li> <NavLink to='/dashboard/home'> <FaHome></FaHome> Home</NavLink> </li>

                                    <li> <NavLink to='/dashboard/payment'> <FaWallet></FaWallet> Payment History</NavLink> </li>

                                    <li> <NavLink to='/dashboard/reservations'> <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink> </li>

                                    <li> <NavLink to='/dashboard/myClass'> <FaSchool></FaSchool> My Class</NavLink> </li>
                                </>
                        }

                        {/* Sidebar content here */}
                        {/* <li> <NavLink to='/dashboard/home'> <FaHome></FaHome> Home</NavLink> </li>

                        <li> <NavLink to='/dashboard/payment'> <FaWallet></FaWallet> Payment History</NavLink> </li>

                        <li> <NavLink to='/dashboard/reservations'> <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink> </li>

                        <li> <NavLink to='/dashboard/myClass'> <FaSchool></FaSchool> My Class</NavLink> </li> */}

                        <div className="divider"></div>

                        <li> <NavLink to='/'> <FaHome></FaHome> Home</NavLink> </li>

                        <li> <NavLink to='/instructor'> <FaWallet></FaWallet> Instructors </NavLink> </li>

                        <li> <NavLink to='/class'> <FaCalendarAlt></FaCalendarAlt> Class </NavLink> </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;