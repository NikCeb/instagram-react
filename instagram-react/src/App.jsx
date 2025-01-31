import "./App.css";
import Footer from "./components/Footer";
// import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <div>
        <div className="w-full flex flex-col min-h-screen">
          {/* <div className="w-full flex justify-content object-center">
            <Login />
          </div> */}
          <HomePage />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
