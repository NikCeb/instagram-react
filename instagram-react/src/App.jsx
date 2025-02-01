import "./App.css";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [loginPromptVisible, setloginPromptVisible] = useState(false);

  function showLoginHandler() {
    setloginPromptVisible(true);
    console.log("showLoginHandler");
  }

  function hideLoginHandler() {
    setloginPromptVisible(false);
  }

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);

  return (
    <>
      <div
        className={`flex min-h-screen min-w-full m-0 p-0 ${
          isSmallScreen ? "flex-col" : "flex-row"
        }`}
      >
        {!isSmallScreen && (
          <>
            <div className="flex w-full justify-center items-center">
              <div className="flex flex-col w-full justify-center items-center">
                <LoginPage />
              </div>
            </div>
            <div className="flex w-full justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <HomePage
                  showLoginHandler={showLoginHandler}
                  hideLoginHandler={hideLoginHandler}
                  loginPromptVisible={loginPromptVisible}
                />
              </div>
            </div>
          </>
        )}

        {isSmallScreen && (
          <>
            <div className="flex w-full justify-center items-center">
              <HomePage
                showLoginHandler={showLoginHandler}
                hideLoginHandler={hideLoginHandler}
                loginPromptVisible={loginPromptVisible}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
