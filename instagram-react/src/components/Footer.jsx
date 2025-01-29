const Footer = () => {
  return (
    <footer className=" text-white m-0 fixed bottom-0 left-0 w-full">
      <div className="w-full mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section*/}
        <div></div>

        {/* Middle Section - Links */}
        <nav className="flex space-x-6 my-3 md:my-0">
          <a href="#" className="text-gray-400 hover:underline text-sm">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:underline text-sm">
            About
          </a>
          <a href="#" className="text-gray-400 hover:underline text-sm">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:underline text-sm">
            Contact
          </a>
        </nav>

        {/* Right Section */}
        <div></div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
