import React from 'react'
import ServiceCard from './ServiceCard'

export default function RecomendedServices({service}) {
  return (
    <div className='w-full bg-white  border rounded py-5 px-3 '>
        <div className='font-custom font-semibold text-2xl text-zinc-600'>Recommended for you </div>
        <div className="h-px mt-2 mb-3 bg-gray-200" />
        <div className='flex flex-col justify-center items-center space-y-4 '>
        <ServiceCard w={96} h={52} w_card={26}/>
        <ServiceCard w={96} h={52} w_card={26}/>
        <ServiceCard w={96} h={52} w_card={26}/>
        
        </div>
        <div className='text-end mt-4 px-3 text-primary underline font-custom cursor-pointer'>View more </div>
    </div>
  )
}
