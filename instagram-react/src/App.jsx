import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="flex w-full flex-row">
        {/* <div className="w-full flex  justify-content lg:w-1/2">
          <Login />
        </div>
        {/* <div className=" hidden lg:flex h-full  justify-content bg-gray-400">
          <div className="w-60 h-60 bg-">hello react</div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
