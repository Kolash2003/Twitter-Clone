import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const Profile = () => {
  return (
    <div className="w-[50%] border-l border-r border-gray-50">
      <div>
        <div className="flex items-center py-2">
          <Link to={"/"} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
             <IoMdArrowBack size={"24px"}/>
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Cat</h1>
            <h2 className="text-gray-500 text-sm">10 posts</h2>
          </div>
        </div>
        <img
          className="w-full"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxalOHOLYR3jCTibx9EaSJYDKW4o2aL0cQyw&s"
          }
          alt="banner"
        />
        <div className="absolute top-52 ml-2 border-4 border-white rounded-full">
            <Avatar src={"data:image/jpeg;base64,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"} size="120" round={true} />
        </div>
        <div className="text-right m-4 ">
          <button className="px-4 py-1 rounded-full border hover:bg-gray-200 border-gray-400">Edit Profile</button>
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">Cat</h1>
          <p>@CatonZwitter</p>
        </div>
        <div className="m-4 text-sm">
          <p>Professional napper 💤 | Expert biscuit maker 🐾 | Treat enthusiast 🍣 | Will judge you from the highest shelf 😼✨</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
