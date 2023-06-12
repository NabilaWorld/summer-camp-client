
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { FaHome, FaWallet, FaCalendarAlt, FaSchool, FaMale, FaBook } from 'react-icons/fa';
import useAdmin from '../hooks/UseAdmin';
import useCheckRole from '../hooks/useCheckRole';

const DashBoard = () => {

// const isAdmin = true;
// const isUser = true;
const [isAdmin] = useAdmin();
const [role] = useCheckRole()
// console.log(role)
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
                  role==='instructor' && 

                      <>

                          <li> <NavLink to='/dashboard/instructorHome'> <FaHome></FaHome>Instructor Home</NavLink> </li>

                         

                          {/* <li> <NavLink to='/dashboard/manageItem'> <FaWallet></FaWallet>Manage Classes </NavLink> </li> */}

                          <li> <NavLink to='/dashboard/addItem'> <FaCalendarAlt></FaCalendarAlt> Add Class </NavLink> </li>

                          {/* <li> <NavLink to='/dashboard/allusers'> <FaSchool></FaSchool> All Users</NavLink> </li> */}

                      </>


                      
              }
              {
                  role==='admin' && 

                      <>

                          <li> <NavLink to='/dashboard/adminHome'> <FaHome></FaHome>Admin Home</NavLink> </li>

                          <li> <NavLink to='/dashboard/allusers'> <FaSchool></FaSchool> All Users</NavLink> </li>

                          <li> <NavLink to='/dashboard/manageItem'> <FaWallet></FaWallet>Manage Classes </NavLink> </li>

                          {/* <li> <NavLink to='/dashboard/addItem'> <FaCalendarAlt></FaCalendarAlt> Add Class </NavLink> </li> */}

                          {/* <li> <NavLink to='/dashboard/allusers'> <FaSchool></FaSchool> All Users</NavLink> </li> */}

                      </>


                      
              }
              {
                  role==='student' && 

                      <>

                          <li> <NavLink to='/dashboard/userHome'> <FaHome></FaHome>Student Home</NavLink> </li>

                          <li> <NavLink to='/dashboard/enroll'> <FaWallet></FaWallet> EnRolled Class </NavLink> </li>

                         

                          <li> <NavLink to='/dashboard/myClass'> <FaSchool></FaSchool> My Selected Class </NavLink> </li>

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