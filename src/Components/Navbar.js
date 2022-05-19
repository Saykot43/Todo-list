import React from "react";
import auth from '../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  }
  const navItems = (
    <>
      <li>
        <NavLink to="/" className="rounded-lg hover:bg-primary hover:text-white">Home</NavLink>
      </li>
      <li>
        <NavLink to="/list" className="rounded-lg hover:bg-primary hover:text-white">List</NavLink>
      </li>
      <li>

        {
          user ?
            <p className="rounded-lg hover:bg-primary hover:text-white" onClick={handleSignout}><span className='logout'>Log out</span></p>
            :
            <>
              <NavLink to="/login" className="rounded-lg hover:bg-primary hover:text-white">Login</NavLink>
            </>
        }
      </li>
    </>
  );
  return (
    <div className="drawer drawer-end">
      <input id="navbar-icon" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar px-20">
          <div className="flex-1 text-primary text-2xl font-bold"><Link to="/">To-Do List</Link></div>
          <div className="flex-none lg:hidden">
            <label htmlFor="navbar-icon" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal font-bold gap-x-3">
              {/* <!-- Navbar menu content here --> */}
              {navItems}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="navbar-icon" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-3 font-bold">
          {/* <!-- Sidebar content here --> */}
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
