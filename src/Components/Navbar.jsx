import React, { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../src/assets/logo.png";
import { handleNav } from "../NavigateLoader";
import toast from "react-hot-toast";
import "animate.css";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import Loader from "./Loader";



const Navbar = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const { user, logOut } = use(AuthContext);
  const defaultPhoto = "https://i.ibb.co/7dLrnrMw/mann.jpg";

//   const handleNav = () => {
//     setloading(true);
//     setTimeout(() => {
//       setloading(false);
//       navigate(path);
//     }, 300);
//   };

  const handleLogOut = () => {
   
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch(() => {
       toast.success("Do not LogOut.Try again");
      });
  };

  const link = (
    <>
      <NavLink
     onClick={() => handleNav(navigate,"/", setloading)}
        className="px-3 font-semibold"
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        onClick={() => handleNav(navigate, "/allProducts", setloading)}
        className="px-3 font-semibold"
        to="/allProducts"
      >
        All Products
      </NavLink>

      <NavLink
         onClick={() => handleNav(navigate, "/addProducts", setloading)}
        className="px-3 font-semibold "
        to="/addProducts"
      >
        Add Product
      </NavLink>

      <NavLink
      onClick={() => handleNav(navigate, "/myProduct", setloading)}
        className="px-3 font-semibold "
        to="/myProduct"
      >
        My Products
      </NavLink>

      <NavLink
    onClick={() => handleNav(navigate, "/myBooking", setloading)}
        className="px-3 font-semibold "
        to="/myBooking"
      >
        My Bookings
      </NavLink>
    </>
  );

  return (
    <>
      {loading && <Loader></Loader>}

      <div className="navbar bg-base-100 shadow-sm w-full px-[7%] relative z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
            >
              {link}
            </ul>
          </div>

          <NavLink   onClick={() => handleNav(navigate,"/", setloading)}className="logo animate__animated animate__rubberBand flex btn btn-ghost p-1 h-fit"  to="/">
            <img className="w-12 h-10 rounded-xl " src={logo} alt="" />
            <p className=" text-xl text-[#20a34a]">Organic Foods</p>
          </NavLink>


        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-2">{link}</ul>
        </div>

        <div className="navbar-end">
            <input
           onChange={(e) => handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>






          {
          
          
          
          
          
          
          
          
          
          
          user ? (
            <>
              <button
    
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip={user.displayName}
              >
                {" "}
                <img
                  src={user.photoURL || defaultPhoto}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultPhoto;
                  }}
                  className="w-12 h-12 mx-2 rounded-full border border-blue-300
     p-1 hover:"
                  alt=""
                />
              </button>

              <button
                onClick={handleLogOut}
                className="btn px-4 shadow-xl shadow-green border border-green-700 py-3 font-semibold rounded-md text-black bg-green-500  hover:text-white hover:border-white transition-all duration-300 "
              >
                LogOut
              </button>
            </>
          ) : (
            <Link to="/auth/login" className="btn px-4 shadow-xl shadow-green border border-green-700 py-3 font-semibold rounded-md text-black bg-green-500  hover:text-white hover:border-white transition-all duration-300 ">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
