import React from 'react'

const SectionHeader = ({heading, subHeading}: {heading:string, subHeading:string}) => {
  return (
    <div className='space-y-2 ml-2 md:ml-0'>
        <div className='flex items-center gap-2 text-brandPrimary text-lg font-semibold'>
            <div className='w-5 h-10 bg-brandPrimary rounded' />
            {subHeading}
        </div>
        <h1 className='text-4xl font-semibold mt-4'>{heading}</h1>
    </div>
  )
}

export default SectionHeader