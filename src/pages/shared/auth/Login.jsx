import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from "sweetalert2";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = useContext(AuthContext);
  const handleSignIn = e =>{
     e.preventDefault();
     const form = new FormData(e.currentTarget);
     const email = form.get("email");
     const password = form.get("password");
     console.log(email, password);
     signIn(email,password)
     .then(result =>{
      console.log(result.user)
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Successfully Log In",
            showConfirmButton: false,
            timer: 2000,
          });
        <Navigate to="/"></Navigate>
     })
     .catch(error =>{
      console.error(error.message)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password or email doesn't match",
      });
     })
  }
    return (
      <div>
        <div>
          <div className="hero-content flex-col  bg-gray-200">
            <h3 className="text-4xl font-bold text-center my-5">
              Login your account
            </h3>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSignIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                    <input 
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      name="password"
                      className="input input-bordered relative"
                      required
                    />
                    <span className='absolute ml-72 mt-14'
                      
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash></FaRegEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-neutral">Login</button>
                </div>
              </form>
              <p className="font-medium text-center pb-10">
                Dont’t Have An Account ?{" "}
                <Link to="/register" className="text-yellow-600">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login