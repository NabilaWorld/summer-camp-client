import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { FaHome, FaWallet, FaCalendarAlt, FaSchool } from 'react-icons/fa';

const DashBoard = () => {
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
                        {/* Sidebar content here */}
                        <li> <NavLink to='/dashboard/home'> <FaHome></FaHome> Home</NavLink> </li>

                        <li> <NavLink to='/dashboard/payment'> <FaWallet></FaWallet> Payment History</NavLink> </li>

                        <li> <NavLink to='/dashboard/reservations'> <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink> </li>

                        <li> <NavLink to='/dashboard/myClass'> <FaSchool></FaSchool> My Class</NavLink> </li>

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