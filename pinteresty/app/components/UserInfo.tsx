import React from 'react'
import Image from 'next/image'

function UserInfo({userInfo}) {
    console.log(userInfo)
  return (
    <div className='flex flex-col items-center'>
        <Image src={userInfo.userImage} alt='userImage' width={100} height={100} className='rounded-full '/>
        <h2 className='text-[30px] font-semibold'>{userInfo.userName}</h2>
        <h2 className='text-gray-400'>{userInfo.email}</h2>
        <button className='bg-gray-200 font-semibold hover:bg-gray-300 mt-5 p-2 px-3 rounded-full'>Share</button>
    </div>
  )
}

export default UserInfo