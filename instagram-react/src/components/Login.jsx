const Login = () => {
  return (
    <>
      <form
        className="flex flex-col flex-grow justify-center mt-3 max-w-[350px] text-center items-center border border-gray-300 box-border font-inherit text-base m-0 mb-2.5 p-2.5 relative align-baseline lg:min-w-[24rem] lg:min-h-[24rem] md:min-w-[20rem] md:min-h-[20rem]"
        onSubmit={(e) => e.preventDefault()}
        style={{
          fontSize: "var(--system-16-font-size)",
          color: "rgb(var(--ig-primary-text))",
        }}
      >
        {/* For Instagram Image Div*/}
        <div className="bg-[url('https://static.cdninstagram.com/rsrc.php/v4/yl/r/2_tD1Q6wIri.png')] bg-[0px_-52px] bg-auto w-[175px] h-[51px] bg-no-repeat inline-block m-9 p-2.5"></div>

        {/* For UserInput Div */}
        <div className="flex-col w-full">
          {/* Username */}
          <div className="flex items-center justify-center ">
            <input
              type="text"
              id="name"
              required
              placeholder="Phone number, username, or email"
              onChange={(e) => console.log(e.target.value)}
              className="w-[80%] text-align-left overflow-hidden border border-gray-400 outline-gray-500 rounded inherit  px-2 py-1 bg-ig-secondary-background  mb-2.5 inline-block"
            />
          </div>
          {/* Password */}
          <div className="flex items-center justify-center">
            <input
              type="password"
              id="password"
              required
              placeholder="Password"
              onChange={(e) => console.log(e.target.value)}
              className="w-[80%] bg-ig-secondary-background border border-gray-400 outline-gray-500 rounded inherit  px-2 py-1 bg-ig-secondary-background  mb-2.5 inline-block"
            />
          </div>
          {/* Login Button */}
          <div className="flex items-center justify-center">
            <button
              className="bg-[#4cb5f9]  text-white inline-block px-2 py-1 rounded w-[80%] "
              type="button"
              onClick={() => console.log("Login clicked")}
            >
              Log in
            </button>
          </div>
          {/* ---OR--- */}
          <div className="flex items-center w-full justify-center">
            <div className="flex items-center w-[80%]">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-gray-500 font-medium text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>
          {/* Login with facebook */}
          <div className="flex items-center w-full justify-center"></div>

          {/* Forgot password */}
        </div>
      </form>
    </>
  );
};
export default Login;
