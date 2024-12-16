import React from 'react'
import Image from 'next/image'
import { HiBell, HiChat, HiSearch } from 'react-icons/hi'

function header() {
  return (
    <div className='flex gap-3 md:gap-2 items-center p-6 '>
        <Image src='/logo.png' alt='logo' width={50} height={50}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
        <button className='bg-black text-white p-2 px-4 rounded-full '>home</button>
        <button className='font-semibold p-2 px-4 rounded-full'>create</button>
        <div className='bg-[#e9e9e9] p-3 hidden md:flex  w-full flex gap-3 items-center rounded-full'>
            <HiSearch className='text-[25px] text-gray-500'/>
            <input className='bg-transparent outline-none' type='text' placeholder='Search'/>
            
        </div>
        <HiSearch className='md:hidden text-[25px] text-gray-500'/>
            <HiBell className='text-[40px] text-gray-500'/>
            <HiChat className='text-[40px] text-gray-500'/>
            <Image src = '/pfp.jpg' alt='user-img' width={50} height={50}
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
    </div>
  )
}

export default header