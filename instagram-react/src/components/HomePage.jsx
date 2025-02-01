import Header from "./Header";
import PostGrid from "./PostGrid";
import Footer from "./Footer";
import LoginPrompt from "./LoginPrompt";
import { MapPin } from "lucide-react";
import PropTypes from "prop-types";

const HomePage = ({
  showLoginHandler,
  hideLoginHandler,
  loginPromptVisible,
}) => {
  return (
    <>
      {/* Login Modal Checker if True Value*/}
      {loginPromptVisible && (
        <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-md backdrop-brightness-30">
          <LoginPrompt hideLoginHandler={hideLoginHandler} />
        </div>
      )}
      {!loginPromptVisible && <Header />}

      <div className="flex flex-col min-h-screen">
        <div className="w-full flex flex-col min-h-screen mt-8 mb-10 flex-1 h-[4rem]">
          {/* Header */}

          {/* HomePage */}
          <div className="max-w-5xl mx-auto flex items-center space-x-4  mt-3 mb-11 w-full justify-center md:justify-start">
            {/* Icon with Circle Border */}
            <div className="relative flex justify-center items-center w-[152px] h-[152px] rounded-full border-2 border-gray-300 xs:w-[4.813rem] xs:h-[4.813rem] md:w-[9.5rem] md:h-[9.5rem]">
              {/* Inner Icon */}
              <div className="w-[2.75rem] h-[2.75rem] flex justify-center items-center rounded-full">
                <MapPin className="h-11 w-11 text-gray-500" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-semibold text-gray-800 hidden md:block">
              Homepage
            </h1>
          </div>
          {/* Top Posts Grid */}
          <PostGrid showLoginHandler={showLoginHandler} />
        </div>
        <Footer />
      </div>
    </>
  );
};

HomePage.propTypes = {
  showLoginHandler: PropTypes.func,
  hideLoginHandler: PropTypes.func,
  loginPromptVisible: PropTypes.bool,
};

export default HomePage;
