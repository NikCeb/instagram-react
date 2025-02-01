import Login from "./Login";
import Footer from "./Footer";
// import prop-types from "prop-types";

const LoginPage = () => {
  return (
    <>
      {/* Login */}
      <div className="flex flex-col h-screen ">
        <div className="flex justify-center items-center h-full ">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-[21.875rem] h-[26.5rem] xs:border xs:border-gray-300">
              <Login />
            </div>
            {/* Don't have an account */}
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
            {/* Get App */}
            <div className="flex flex-col items-center justify-center w-[21.875rem] h-[5.938rem] ">
              <div className="text-sm mt-2 mb-2 items-center justify-center">
                Get the app.
              </div>
              <div className="flex space-x-4">
                {/* Google Play Button */}
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-10 w-[8.375rem]"
                  />
                </a>

                {/* Microsoft Store Button */}
                <a
                  href="https://www.microsoft.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v4/yu/r/EHY6QnZYdNX.png"
                    alt="Get it from Microsoft"
                    className="h-10 w-[6.875rem]"
                  />
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
