const Header = () => {
  return (
    <>
      <div className="relative">
        <header className="flex flex-row fixed top-0 left-0 z-50 border-b border-[#dbdbdb] w-full px-4 h-16 items-center justify-between bg-white ">
          <div className="container mx-auto  flex items-center justify-between max-w-[53.938rem] w-full">
            <div
              className="flex justify-start items-center  w-[175px] h-[61px] -ml-4 mt-2  "
              style={{
                backgroundImage:
                  "url('https://static.cdninstagram.com/rsrc.php/v4/y-/r/PbVHqAuqvCp.png')",
                backgroundPosition: "0px -246px",
                backgroundSize: "auto",
                width: "175px",
                height: "51px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
                scale: "0.7",
              }}
            ></div>
            {/* Log In Button */}
            <nav className="flex flex-row space-x-4 object-center text-center inherit">
              <a href="/" className="hover:text-gray-600">
                <button
                  className="flex content-center text-center justify-center items-center bg-blue-500
                 text-white px-4 py-2 rounded-md xs:px-1 xs:py-1 xs:text-[.875rem] sm:px-2 sm:py-2 sm"
                >
                  Log In
                </button>
              </a>
              {/* Sign Up */}
              <a
                href="https://www.instagram.com/accounts/emailsignup/?hl=en"
                className="flex content-center text-center justify-center items-center hover:text-gray-600 xs:text-[.875rem]"
              >
                Sign Up
              </a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
