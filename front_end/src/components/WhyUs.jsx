import React from 'react'
import Diima from '../assets/Diima.png'
import love from '../assets/love.png'
import tsnif from '../assets/tsnif.png'
import professionel from '../assets/professionel.png'
import Assure from '../assets/Assure.svg'
import Daman from  '../assets/Daman.svg'
export default function
    () {
    return (
        <div>
            <div className='py-14 md:py-28 flex justify-center  bg-gray-100'>
                <div className='container'>
                    <h1 data-aos="zoom-in" className='pb-20 flex justify-center items-center tracking-wider text-4xl font-bold text-center'>Why Choose Us</h1>
                    <div>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center sm:gap-4'>
                            <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-1 px-2 py-20'>
                                <img src={Diima} className='w-[150px]'></img>
                                <p className='text-2xl font-semibold pt-7'>24/7 customer service</p>
                                <p className='text-xl pt-5'>A professional team to respond to inquiries and solve problems as quickly as possible</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-1 px-2 py-20'>
                                <img src={love} className='w-[150px]'></img>
                                <p className='text-2xl font-semibold pt-7'>Economical prices</p>
                                <p className='text-xl pt-5'>High quality services at prices starting from only $5</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-1 px-2 py-20'>
                                <img src={tsnif} className='w-[150px]'></img>
                                <p className='text-2xl font-semibold pt-7'>More than 350 categories</p>
                                <p className='text-xl pt-5'>+350 categories that include thousands of services in all fields</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-1 px-2 py-20'>
                                <img src={professionel} className='w-[150px]'></img>
                                <p className='text-2xl font-semibold pt-7'>Professional service providers</p>
                                <p className='text-xl pt-5'>Personal profiles highlighting sellers' services and past ratings</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-1 px-2 py-20'>
                                <img src={Assure} className='w-[150px]'></img>
                                <p className='text-2xl font-semibold pt-7'>Safe and reliable transactions</p>
                                <p className='text-xl pt-5'>Service providers authenticate their identities for secure and authentic transactions</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-1 px-2 py-20'>
                                <img src={Daman} className='w-[150px]'></img>
                                <p className='text-2xl font-semibold pt-7'>Guarantee of rights</p>
                                <p className='text-xl pt-5'>Gig Galaxy guarantees your financial rights and your receipt of the complete work according to what the seller offers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
