import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Heart, Menu, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full border-b-2 border-gray-300 p-4'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
            <h1 className='text-2xl font-bold ml-10'>Exclusive</h1>
            <div className='hidden md:flex gap-x-12 ml-16'>
                <Link href={"#"} className='text-base font-medium'>Home</Link>
                <Link href={"#"} className='text-base font-medium'>Contact</Link>
                <Link href={"#"} className='text-base font-medium'>About</Link>
                <Link href={"#"} className='text-base font-medium'>Sign Up</Link>
            </div>
            <div className='hidden md:flex gap-2'> 
            <div className='relative'>
                <Input 
                placeholder='What are you looking for?' 
                className='bg-[#F5F5F5] rounded text-xs font-extralight text-[#7D8184] mr-36'/>
                <Search className='absolute right-3 top-2 stroke-[#7D8184] border-none stroke-1 w-6 h-5'/>
            </div>
            <Button variant={"outline"} size={"icon"} className='border-none rounded-full'>
                <Heart />
            </Button>
            <Button variant={"outline"} size={"icon"} className='border-none rounded-full'>
                <ShoppingCart />
            </Button>
        </div>
         <Sheet>
            <SheetTrigger className='flex md:hidden'>
            <Button variant={"outline"} size={"icon"}>
            <Menu className='size-4 text-gray-400'/>
            </Button>
            </SheetTrigger>
            <SheetContent side={"right"}>
                <SheetHeader className='flex items-start'>
                    <SheetTitle>Exclusive</SheetTitle>
                </SheetHeader>
                <div className='flex flex-col gap-6 mt-6'>
                    <Link href={"#"} className='text-sm font-medium'>Home</Link>
                    <Link href={"#"} className='text-sm font-medium'>Contact</Link>
                    <Link href={"#"} className='text-sm font-medium'>About</Link>
                    <Link href={"#"} className='text-sm font-medium'>Sign Up</Link>
                <div className='mt-4'>
                <div className='relative'>
                <Input 
                placeholder='What are you looking for? ' 
                className='bg-[#F5F5F5] rounded text-sm font-extralight text-[#7D8184]'/>
                <Search className='absolute right-2 top-2 text-gray-600'/>
            </div>
                <div className='flex gap-4 mt-6'>
                <Button variant={"outline"} size={"icon"} className='rounded-full'>
                <Heart />
                </Button>
                <Button variant={"outline"} size={"icon"} className='rounded-full'>
                <ShoppingCart />
                </Button>
                </div>
                </div>
                </div>
            </SheetContent>
         </Sheet>
        </div>
    </nav>
  )
}

export default Navbar