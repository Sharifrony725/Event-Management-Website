import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import app from "../../../firebase/firebase.config";
import Swal from "sweetalert2";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result =>{
      console.log(result)
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "Successfully Log In With Google",
        showConfirmButton: false,
        timer: 2000,
      });
    })
    .catch(error =>{
      console.log(error);
    })
  };
  const handleLogout = () => {
    logOut()
    .then(result => {
      console.log(result)
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "Successfully Logged Out",
        showConfirmButton: false,
        timer: 2000,
      });
    })
    .catch(error => {
      console.error(error);
    })
  };
  
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-primary text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img src={logo} className="lg:w-10 w-7" />
        {/* <h3 className="font-bold text-3xl">Weeding Hub</h3> */}
        <p className="lg:font-bold font-semibold lg:text-3xl lg:text-start text-end">
          Event Hub
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-medium">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div>
            <span className="mx-1 font-bold text-xl mr-3">{user?.email}</span>
            <NavLink className="btn btn-sm ml-20" onClick={handleLogout}>
              Logout
            </NavLink>
          </div>
        ) : (
          <div>
            <button className="btn btn-sm mr-2 my-2" onClick={handleGoogleSignIn}>Login With Google</button>
            <NavLink className="btn btn-sm px-4 py-2" to="/login">
              Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;