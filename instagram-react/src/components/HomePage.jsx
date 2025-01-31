import Header from "./Header";
import { MapPin } from "lucide-react";
import PostGrid from "./PostGrid";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col min-h-screen mt-8 mb-10 flex-1 h-[4rem]">
        {/* Header */}

        {/* HomePage */}
        <div className="max-w-5xl mx-auto flex items-center space-x-4  mt-3 mb-11 w-full justify-center md:justify-start">
          {/* Icon with Circle Border */}
          <div className="relative flex justify-center items-center w-[152px] h-[152px] rounded-full border-2 border-gray-300 xs:w-[4.813rem] xs:h-[4.813rem] md:w-[9.5rem] md:h-[9.5rem]">
            {/* Inner Icon */}
            <div className="w-11 h-11 flex justify-center items-center rounded-full">
              <MapPin className="h-6 w-6 text-gray-500" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800 hidden md:block">
            Homepage
          </h1>
        </div>
        {/* Top Posts Grid */}
        <PostGrid />
      </div>
    </>
  );
};

export default HomePage;
