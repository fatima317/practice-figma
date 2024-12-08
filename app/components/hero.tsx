import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='flex md:flex-row flex-col-reverse items-center justify-between w-full mb-20 mt-1'>
      <div className='flex items-start flex-col w-full md:w-1/4 border-r-2 border-gray-300 p-4 ml-4'>
      <Button
        variant="ghost"
        size="sm"
        className='w-full flex justify-between text-base'
        >
          Woman's Fashion
          <ChevronRight className='size-3 text-black' />
        </Button>
        <Button
        variant="ghost"
        size="sm"
        className='w-full flex justify-between text-base'
        >
          Men's Fashion
          <ChevronRight className='size-3 text-black' />
        </Button>
        <Button
        variant="ghost"
        size="sm"
        className='w-full flex justify-between text-base'
        >
          Electronics
          <ChevronRight className='size-3 text-black' />
        </Button>
        <Button
        variant="ghost"
        size="sm"
        className='w-full flex justify-between text-base'
        >
          Home & Lifestyle
          <ChevronRight className='size-3 text-black' />
        </Button>
        <Button
        variant="ghost"
        size="sm"
        className='w-full flex justify-between text-base'
        >
          Medicine
          <ChevronRight className='size-3 text-black' />
        </Button>
        <Button
        variant="ghost"
        size="sm"
        className='w-full flex justify-between text-base'
        >
          Sports & Outdoor
          <ChevronRight className='size-3 text-black' />
        </Button>
        <Button
        variant="ghost"
        size="sm"
        className='w-full flex justify-between text-base'
        >
          Baby's & Toys
          <ChevronRight className='size-3 text-black' />
        </Button>
        <Button
        variant="ghost"
        size="sm"
        className='w-full flex justify-between text-base'
        >
          Groceries & Pets
          <ChevronRight className='size-3 text-black' />
        </Button>
        <Button
        variant="ghost"
        size="sm"
        className='w-full flex justify-between text-base'
        >
          Health & Beauty
          <ChevronRight className='size-3 text-black' />
        </Button>
      </div>
      <div className='m-5 md:m-10 flex-grow'>
        <Image 
          src="/hero-image.png"
          alt='hero image'
          height={344}
          width={892}
          className="object-contain"
          />
      </div>
    </section>
  )
}

export default Hero ;