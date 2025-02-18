import React from "react"
import CreatePost from "./CreatePost.jsx"
import Tweet from "./Tweet.jsx"

const Feed = () => {
  return (
    <div className="w-[50%] border border-gray-200">
      <div>
        <CreatePost />
        <Tweet />
      </div>
    </div>
  )
}

export default Feed
