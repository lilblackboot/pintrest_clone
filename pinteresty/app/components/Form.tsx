import React from 'react'
import UploadImage from './UploadImage'
import UserTag from './UserTag'

function Form() {
  return (
    <div className='bg-white p-16 rounded-2xl'>
        <div className='bg-red-500 p-2 text-white font-semibold px-3 rounded-lg'>
            Save
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <UploadImage/>
            <div className='col-span-2'>
                <div className='w-[100%]'>
                    <input type='text' placeholder='Add your title' className='text-[35px] outline-none font-bold w-full border-b-[2px] border-gray-400 placeholder-gray-400'/>
                    <h2 className='text-[12px] w-full text-gray-400'>the first 40 characters are what usually shows up in the feed</h2>
                    <UserTag />
                    <textarea type='text' placeholder='Tell everyone what the pin is about' className='outline-none w-full mt-8 pb-4 text-[14px] border-b-[2px] border-gray-400 placeholder-gray-400'/>
                    <input type='text' placeholder='Add a destination link' className='outline-none w-full pb-4 mt-[90px] border-b-[2px] border-gray-400 placeholder-gray-400'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form