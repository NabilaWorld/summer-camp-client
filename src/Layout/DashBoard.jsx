
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { FaHome, FaWallet, FaCalendarAlt, FaSchool, FaMale, FaBook } from 'react-icons/fa';
import useAdmin from '../hooks/UseAdmin';

const DashBoard = () => {

// const isAdmin = true;
const isUser = true;
const [isAdmin] = useAdmin();

return (
<div>
  <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-gray-500">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gray-500 font-bold text-base-content">


              {
                  isAdmin ?

                      <>

                          <li> <NavLink to='/dashboard/home'> <FaHome></FaHome>Admin Home</NavLink> </li>

                          {/* <li> <NavLink to='/dashboard/payment'> <FaWallet></FaWallet> Add Items</NavLink> </li> */}

                          <li> <NavLink to='/dashboard/manageItem'> <FaWallet></FaWallet>Manage Item </NavLink> </li>

                          <li> <NavLink to='/dashboard/addItem'> <FaCalendarAlt></FaCalendarAlt> Add Class </NavLink> </li>

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

              

              <div className="divider"></div>

              <li> <NavLink to='/'> <FaHome></FaHome> Home</NavLink> </li>

              <li> <NavLink to='/instructor'> <FaMale></FaMale> Instructors </NavLink> </li>

              <li> <NavLink to='/class'> <FaBook></FaBook> Class </NavLink> </li>

             

          </ul>

      </div>
  </div>
</div>
);
};

export default DashBoard;