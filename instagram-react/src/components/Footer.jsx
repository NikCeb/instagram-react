import LanguageSelector from "./LanguageSelector";

const Footer = () => {
  const links = [
    { name: "Meta", url: "https://about.meta.com/" },
    { name: "About", url: "https://about.instagram.com/" },
    { name: "Blog", url: "https://about.instagram.com/blog/" },
    { name: "Jobs", url: "https://about.instagram.com/about-us/careers" },
    { name: "Help", url: "https://help.instagram.com/" },
    {
      name: "API",
      url: "https://developers.facebook.com/docs/instagram-platform",
    },
    {
      name: "Privacy",
      url: "https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect",
    },
    { name: "Terms", url: "https://help.instagram.com/581066165581870/" },
    {
      name: "Locations",
      url: "https://www.instagram.com/explore/locations/?next=%2Fexplore%2Flocations%2F30560023%2Fhomepage%2F&hl=en",
    },
    {
      name: "Instagram Lite",
      url: "https://www.instagram.com/web/lite/?next=%2Fexplore%2Flocations%2F30560023%2Fhomepage%2F&hl=en",
    },
    { name: "Threads", url: "https://www.threads.net/" },
    {
      name: "Contact Uploading & Non-Users",
      url: "https://www.facebook.com/help/instagram/261704639352628?next=%2Fexplore%2Flocations%2F30560023%2Fhomepage%2F&hl=en#",
    },
    {
      name: "Meta Verified",
      url: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fmeta_verified%2F%3Fentrypoint%3Dweb_footer%26next%3D%252Fexplore%252Flocations%252F30560023%252Fhomepage%252F%26hl%3Den%26__coig_login%3D1",
    },
  ];

  return (
    <div className="">
      <footer className="flex flex-col text-white bottom-0 left-0 w-full text-xs mb-13">
        <div className="w-full mx-auto px-2 flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div></div>
          {/* Middle Section - Links */}
          <nav className="flex flex-wrap space-x-4 my-3 md:my-0 flex-row justify-center px-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-[#737373] hover:text-gray-500 hover:underline"
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Right Section */}
          <div></div>
        </div>
        {/* Bottom Section - Copyright */}
        <div className="text-center text-[#737373] pb-2 mt-4 flex flex-row justify-center items-center">
          <div>
            <LanguageSelector />
          </div>
          <div>&copy; {new Date().getFullYear()} Instagram from Meta</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
