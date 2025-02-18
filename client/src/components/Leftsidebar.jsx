
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoBookmarkSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Leftsidebar = () => {
  return (
    <div className="w-[20%]">
        <div>
            <div id="logo">
                <img className="ml-4 my-5" width={"32px"} src={"https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-900x920.png"} alt="zwitter logo" />
            </div>
            <div id="menubar" className="my-4 font-bold">
                <Link to={"/"} className="flex items-center pl-4 my-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                    <AiFillHome size={"24px"} />
                    <h1 className="ml-2">Home</h1>
                </Link>
                <div className="flex items-center pl-4 my-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                    <FaMagnifyingGlass size={"24px"} />
                    <h1 className="ml-2">Explore</h1>
                </div>
                <div className="flex items-center pl-4 my-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                    <IoMdNotifications size={"24px"} />
                    <h1 className="ml-2">Notification</h1>
                </div>
                <Link to={"/profile"} className="flex items-center pl-4 my-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                    <FaUser size={"24px"} />
                    <h1 className="ml-2">Profile</h1>
                </Link>
                <div className="flex items-center pl-4 my-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                    <IoBookmarkSharp size={"24px"} />
                    <h1 className="ml-2">Bookmarks</h1>
                </div>
                <div className="flex items-center pl-4 my-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                    <MdLogout size={"24px"} />
                    <h1 className="ml-2">Logout</h1>
                </div>
                <button className="px-4 py-2 bg-[#109bfb] w-full rounded-full font-bold text-white">Post</button>
            </div>
        </div>
    </div>
  )
}

export default Leftsidebar
