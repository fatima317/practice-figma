import { ChevronDown } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <div className='bg-black w-full md:flex items-center justify-between p-3'>
      <div className='max-w-7xl mx-auto flex items-center justify-center'>
      <p className='text-white ml-32'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className='font-bold underline ml-2'>ShopNow</span>
      </p>
      </div>
      <p className='text-white flex items-center gap-2 mr-6'>
        English
        <ChevronDown />
        </p>
    </div>
  )
}

export default Topbar