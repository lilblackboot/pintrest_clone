"use client"
import React from 'react'
import Image from 'next/image'
import { HiSearch,HiChat,HiBell } from 'react-icons/hi'
import { signIn,useSession,signOut } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
        <Image src='/logo.png' alt='logo' width={50} height={50}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
        <button className='bg-black text-white p-2 px-4 rounded-full'>home</button>
        <button className='font-semibold p-2 px-4 rounded-full'>create</button>
        <div className='w-full bg-[#e9e9e9] p-3 flex hidden md:flex gap-3 items-center rounded-full'>
            <HiSearch className='text-[25px] text-gray-500'/>
            <input type='text' placeholder='search'
            className='bg-transparent outline-none' />
        </div>
        <HiSearch className='text-[25px] text-gray-500 md:hidden'/>
        <HiBell className='text-[40px] text-gray-500'/>
        <HiChat className='text-[40px] text-gray-500'/>
        {session?.user?  <Image src={session?.user?.image} alt='pfp' width={50} height={50}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/> :
        <button onClick={() => signIn()} className='font-semibold p-2 px-4 rounded-full'>login</button>}


    </div>
  )
}

export default Header