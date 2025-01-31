const Header = () => {
  return (
    <>
      <header className="flex flex-row fixed top-0 left-0 z-50 border-b border-[#dbdbdb] w-full px-4 h-16 items-center justify-between bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-[53.938rem] w-full">
          <h1 className="text-2xl font-bold font-serif sm:text-lg md:text-2xl">
            Instagram
          </h1>
          <nav className="flex flex-row space-x-4 object-center text-center inherit">
            <a href="/" className="hover:text-gray-600">
              <button className="flex content-center text-center justify-center items-center bg-blue-500 text-white px-4 py-2 rounded-md xs:px-1 xs:py-1 xs:text-[.875rem] sm:px-2 sm:py-2 sm">
                Log In
              </button>
            </a>
            <a
              href="https://www.instagram.com/accounts/emailsignup/?hl=en"
              className="flex content-center text-center justify-center items-center hover:text-gray-600 xs:text-[.875rem]"
            >
              Sign Up
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
