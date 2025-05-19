import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/component.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice.js";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);

  const LoginSighupHandler = () => {
    setisLogin(!isLogin);
  }

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if(isLogin) {
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, {
          email, password
        },{
          headers: {
          'Content-Type':"application/json",
          },
          withCredentials:true,
        });
        dispatch(getUser(res?.data?.user));
        if(res.data.success){
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong!");
        console.log("Error:", error);
      }
    } else {
      try {
        const res = await axios.post(`${USER_API_END_POINT}/new`, {
          name, userName, email, password
        },{
          headers:{
            'Content-Type':"application/json",
          },
          withCredentials:true,
        });
        if(res.data.success){
          navigate("/login");
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    }
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
          <form onSubmit={submitHandler} action="" className="flex flex-col w-[55%]">
            {
              !isLogin && (<>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Name" className="outline-blue-600 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
                <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} placeholder="Username" className="outline-blue-600 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
              </>)
            }
            <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" className="outline-blue-600 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
            <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"  className="outline-blue-600 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"/>
            <button className="px-4 bg-[#109bfb] text-white text-lg font-bold py-1.5 rounded-full my-1"> {isLogin ? "Login" : "Register"} </button>
            <h1> {isLogin ? "Do not have an account?" : "Already have an account?"} <span onClick={LoginSighupHandler} className="font-bold text-blue-500 cursor-pointer"> {isLogin ? "Register" : "Login"} </span> </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
