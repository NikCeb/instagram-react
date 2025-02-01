import Login from "./Login";
import Footer from "./Footer";
// import prop-types from "prop-types";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className="flex justify-center items-center h-full ">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-[21.875rem] h-[26.5rem] xs:border xs:border-gray-300">
              <Login />
            </div>
            <div className="flex flex-row items-center justify-center w-[21.875rem] h-[3.938rem] xs:border xs:border-gray-300 mt-2">
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
      </div>
      <Footer />
    </>
  );
};
export default LoginPage;
