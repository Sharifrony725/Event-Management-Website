import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);
    if(password.length <6){
       Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "The password is less than 6 characters",
       });
       return
    }
    else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The password don't have a capital letter",
      });
      return;
    }
    else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The password don't have a special character",
      });
      return;
    }
      // error reset
      // setRegisterError("");
      // setSuccess("");
      // create user
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Account Create Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        })

        .catch((error) => {
          console.error(error.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
          // setRegisterError(error.message);
        });
  };
  return (
    <div>
      <div>
        <div className="hero-content flex-col  bg-gray-200">
          <h3 className="text-4xl font-bold text-center my-5">
            Register your account
          </h3>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
              </div>

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
                <button className="btn btn-neutral">Register</button>
              </div>
            </form>
            <p className="font-medium text-center pb-10">
              Already Have An Account ?
              <Link to="/login" className="text-yellow-600">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
