import React, { useState } from "react";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);

  const LoginSighupHandler = () => {
    setisLogin(!isLogin);
  }

  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div className="flex items-center justify-evenly w-[30%]">
          <img
            className="ml-4 my-5"
            width={"300px"}
            src={
              "https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-900x920.png"
            }
            alt="zwitter logo"
          />
        </div>
        <div>
          <div>
            <h1 className="font-bold text-7xl">Happening now.</h1>
          </div>
          <h1 className="mt-5 text-2xl font-bold mb-2"> {!isLogin ? "Join today!" : "Login"} </h1>
          <form action="" className="flex flex-col w-[55%]">
            {
              !isLogin && (<>
                <input type="text" placeholder="Name" className="outline-blue-600 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
                <input type="text" placeholder="Username" className="outline-blue-600 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
              </>)
            }
            <input type="email" placeholder="Email" className="outline-blue-600 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
            <input type="password" placeholder="Password"  className="outline-blue-600 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"/>
            <button className="px-4 bg-[#109bfb] text-white text-lg font-bold py-1.5 rounded-full my-1"> {isLogin ? "Login" : "Register"} </button>
            <h1> {isLogin ? "Do not have an account?" : "Already have an account?"} <span onClick={LoginSighupHandler} className="font-bold text-blue-500 cursor-pointer"> {isLogin ? "Register" : "Login"} </span> </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
