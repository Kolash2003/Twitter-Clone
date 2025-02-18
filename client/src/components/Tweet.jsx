import React from 'react'
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";

const Tweet = () => {
  return (
    <div>
       <div className='flex p-4'>
            <div>
                <Avatar src={"data:image/jpeg;base64,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"} size="50" round={true} />
            </div>
            <div className='ml-2 w-full'>
                <div className='flex gap-x-3'>
                    <div className='font-bold'>
                        <p>Kittyo</p>
                    </div>
                    <div>
                        <p className='text-sm'>@pawsome_kittyo .1m</p>
                    </div>
                </div>
                <div>
                    <p>Feed me, hooman. My bowl is half-empty, and that is unacceptable.</p>
                </div>
                <div className='flex justify-between my-2'>
                    <div className='flex items-center'>
                        <div className='p-2 hover:bg-green-200 rounded-full'>
                            <FaRegComment />
                        </div>
                        <p>0</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='p-2 hover:bg-red-200 rounded-full'>
                            <FaRegHeart />
                        </div>
                        <p>0</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='p-2 hover:bg-blue-200 rounded-full'>
                            <IoBookmarkOutline />
                        </div>
                        <p>0</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Tweet
