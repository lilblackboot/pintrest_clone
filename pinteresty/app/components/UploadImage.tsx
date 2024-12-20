import React from 'react'
import { HiArrowUpCircle } from 'react-icons/hi2'

function UploadImage() {
  return (
    <div>
        <label className='m-5 flex flex-col justify-center items-center cursor-pointer h-[90%] border-[2px] border-gray-300 border-dashed rounded-lg taxt-gray-600'>
            <HiArrowUpCircle className='text-[22px]'/>
            <h2 className='font-semibold'>Click to upload</h2>
            <input id='dropzone-file' type='file' className='hidden'/>
        </label>
    </div>
  )
}

export default UploadImage