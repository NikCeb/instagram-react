import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import InputField from "./InputField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login clicked");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col justify-center mt-3
         max-w-[25rem] max-h-[26.56rem] text-center items-center 
         w-[25rem] h-[26.5rem]  font-inherit text-base m-0 mb-2.5 p-2.5 relative align-normal"
      style={{
        fontSize: "var(--system-14-font-size)",
        color: "rgb(var(--ig-primary-text))",
      }}
    >
      {/* For Instagram Image Div */}
      <div
        className="flex w-[175px] h-[61px] m-9 mb-4"
        style={{
          background: 'url("/Instagram-Logo.png") no-repeat',
          backgroundSize: "fill",
        }}
      ></div>

      {/* For UserInput Div */}
      <div className="flex flex-col pt-5 w-full items-center justify-center">
        {/* Username */}
        <InputField
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Phone number, username, or email"
        />
        {/* Password */}
        <InputField
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />
        {/* Login Button */}
        <button
          className="bg-[#4cb5f9] w-[80%] text-white mt-2.5 px-2 py-1 rounded-lg "
          type="submit"
        >
          Log in
        </button>
        {/* ---OR--- */}
        <div className="flex items-center justify-center py-4 w-[80%]">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500 font-medium xs:text-xs sm:text-sm md:text-sm">
            OR
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
      {/* Login with Facebook */}
      <div className="flex flex-row items-center w-[80%] justify-center py-4">
        <a className="text-[#0095f6] hover:text-gray-900 flex items-center">
          <FaFacebook className="mr-2 size-20px" />
          Log in with Facebook
        </a>
      </div>
      {/* Forgot password */}
      <div className="flex items-center justify-center w-[80%]">
        <a href="#" className="text-[#0095f6] hover:text-gray-900">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default Login;
