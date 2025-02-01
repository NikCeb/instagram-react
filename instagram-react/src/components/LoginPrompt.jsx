import Login from "./Login";
import PropTypes from "prop-types";
import { X } from "lucide-react";

function LoginPrompt({ hideLoginHandler }) {
  // For Login Prompt in homepage
  return (
    <>
      <div
        className="fixed w-full h-screen opacity-30 z-0"
        onClick={hideLoginHandler}
      ></div>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center items-center h-screen ">
          {/* Close Button (Top Right) */}

          <div className="flex flex-col items-center rounded-2xl justify-center w-[25rem] h-[30rem] bg-white xs:border xs:border-gray-300 relative">
            <button
              className="absolute top-0 right-0 bg-white z-1 hover:border-white"
              onClick={hideLoginHandler}
              style={{ cursor: "pointer" }}
            >
              <X size={24} onClick={hideLoginHandler} />
            </button>
            <Login />
            <div className="relative flex justify-center items-center pb-2.5 text-sm">
              <p className="relative flex justify-center items-center">
                Don&apos;t have an account? &nbsp;
              </p>
              <a
                className="relative flex justify-center items-center text-blue-500 hover:text-blue-500"
                href="https://www.instagram.com/accounts/emailsignup/?next=%2Fexplore%2Flocations%2F30560023%2Fhomepage%2F&hl=en"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

LoginPrompt.propTypes = { hideLoginHandler: PropTypes.func };

export default LoginPrompt;
