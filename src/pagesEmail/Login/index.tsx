// import UserService from "../../DataService/userService";
import UserService from "../../DataService/userService";
import React, { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./login.css"

interface IFormInput {
  email?: string;
  password?: string;
  setLogin: any;
}
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login: FC<IFormInput> = ({setLogin}) => {
  const {
    
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      password: "test@test",
    },
    resolver: yupResolver(schema),
  });

  const [inputEmail, inputPassword] = watch(["email", "password"]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = () => {
    if (inputEmail === "test1@test.com" && inputPassword === "test@test") {
      setIsAuthenticated(true);
    }
    setLogin(true);
  };
  const navigate = useNavigate();


  useEffect(() => {
    if (isAuthenticated) {
      setLogin(true)
      return navigate("/main/email");
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className="w-screen bg-darkblue-900 h-screen">
      <div className="container mx-auto relative min-h-screen">
        <div  className=" rounded-lg mx-auto overflow-hidden absolute bg-white py-16 text-black px-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{width:"30rem", height:"auto" }}>
          <div className="grid lg:grid-cols-12 ">
            <div className="lg:col-span-12 ">
              <div className="w-full text-center flex flex-col items-center gap-3">
                <div className=" img w-full ">
                  <img
                    className="max-w-full"
                    src="https://fa-react-email-app.vercel.app/static/media/connect-logo-black.d5b0863d.svg"
                    alt="logo"
                  />
                </div>
                <div>
                  <p className="text-xl text-gray-700 font-light">
                    Login to check your email!!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}
            
            className="grid lg:grid-cols-12 "
          >
            <div className="lg:col-span-12 ">
              <div className="grid lg:grid-cols-12 gap-4">
                <div className="lg:col-span-12 ">
                  <div className="">
                    <label
                      
                      className="block text-xl mb-2 "
                    >
                      Email
                    </label>
                    <select
                      {...register("email", { required: true })}
                      className="w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md false"
                    >
                      <option value="default">------Choose an email</option>

                      {UserService.map((data:any) => (
          <option key={data.email}>{data.email}</option>
        ))}

                      {/* <option value={email}>test1@test.com</option> */}
                    </select>
                  </div>
                </div>
                <div className="lg:col-span-12 ">
                  <div className="">
                    <label className="block text-xl mb-2 ">Password</label>
                    <input
                     {...register("password")} type="password"
                      className="w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md  false"
                      
                    ></input >
                     {(errors.email || errors.password) && (
        <span >Wrong email or password !!</span>
      )}
                  </div>
                </div>
                <div className="lg:col-span-12 mt-3">
                  <button
                    className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
                      bg-gray-500 text-white hover:bg-gray-400 false w-full bg-darkblue-800"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
