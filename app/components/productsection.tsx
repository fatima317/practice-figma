import React from 'react'
import SectionHeader from './sectionheader'
import LiveDateTime from './timer'
import ProductsCollection from './products-collection'
import { Button } from '@/components/ui/button'

export interface Product {
    name: string,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number
    }
}

interface ProductSectionProps {
    heading: string,
    subHeading: string,
    showTimer: boolean,
    action: React.ReactNode,
    products: Product[],
    isCarousel: boolean,
    ctaText?: string
}
const ProductSection = ({
    heading, 
    subHeading,
    showTimer,
    action,
    products,
    isCarousel,
    ctaText}: ProductSectionProps) => {
  return (
    <div className='flex flex-col justify-center'>
        <div className='flex items-end justify-between'>
            <div className='space-x-10 flex items-end ml-10'>
                <SectionHeader heading={heading} subHeading={subHeading} />
                {showTimer && <LiveDateTime />}
            </div>
            <div className='hidden md:flex'>{action}</div>
        </div>
        <div className='mt-10'>
            <ProductsCollection products={products} isCarousel={isCarousel} />
        </div>
        <Button className='bg-brandPrimary text-white w-fit rounded-none mx-auto mt-4'>{ctaText}</Button>
    </div>
  )
}

export default ProductSection;