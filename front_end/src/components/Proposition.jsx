import React from 'react'
import { HiColorSwatch } from "react-icons/hi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { TbWriting } from "react-icons/tb";
import { SiAirplayvideo } from "react-icons/si";
import { AiFillAudio } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import { FaCoffee } from "react-icons/fa";

export default function Proposition() {
    return (
        <div className='py-14 md:py-28 flex justify-center'>
            <div className='container'>
                <h1 data-aos="zoom-out" className='text-4xl font-Fontprimary font-bold text-center py-6 pb-20'>
                    Whatever you require, we've got it covered
                </h1>

                <div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 sm:gap-4 '>
                        <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-2 px-2 mb-[20px] '>
                            <HiColorSwatch  className='text-7xl text-primary' />
                            <p className='text-5xl rotate-90 text-gray-500 text-center translate-x-5'>....</p>
                            <p className='text-2xl font-semibold pt-4'>Graphics & Design</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-2 px-2 mb-[20px]'>
                            <p className='text-2xl font-semibold pt-4'>Digital Marketing</p>
                        <p className='text-5xl rotate-90 text-gray-500 text-center translate-x-5'>....</p>
                            <BiSolidShoppingBags className='text-7xl text-primary' />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-2 px-2 mb-[20px]'>
                            <TbWriting className='text-7xl text-primary' />
                            <p className='text-5xl rotate-90 text-gray-500 text-center translate-x-5'>....</p>
                            <p className='text-2xl font-semibold pt-4'>Writing & Translation</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-2 px-2 mb-[20px]'>
                            <p className='text-2xl font-semibold pt-4'>Video & Animation</p>
                            <p className='text-5xl rotate-90 text-gray-500 text-center translate-x-5'>....</p>
                            <SiAirplayvideo  className='text-7xl text-primary' />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-2 px-2 mb-[20px]'>
                            <AiFillAudio className='text-7xl text-primary' />
                            <p className='text-5xl rotate-90 text-gray-500 text-center translate-x-5'>....</p>
                            <p className='text-2xl font-semibold pt-4'>Music & Audio</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-2 px-2 mb-[20px]'>
                            <FaLaptopCode className='text-7xl text-primary' />
                            <p className='text-5xl rotate-90 text-gray-500 text-center translate-x-5'>....</p>
                            <p className='text-2xl font-semibold pt-4'>Programming & Tech</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-2 px-2 mb-[20px]'>
                            <p className='text-2xl font-semibold pt-4'>Business</p>
                            <p className='text-5xl rotate-90 text-gray-500 text-center translate-x-5'>....</p>
                            <IoBusiness className='text-7xl text-primary' />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-2 px-2 mb-[20px]'>
                            <FaCoffee  className='text-7xl text-primary' />
                            <p className='text-5xl rotate-90 text-gray-500 text-center translate-x-5'>....</p>
                            <p className='text-2xl font-semibold pt-4'>Lifestyle</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-2 px-2 mb-[20px]'>
                            <p className='text-2xl font-semibold pt-4'>Data</p>
                            <p className='text-5xl rotate-90 text-gray-500 text-center translate-x-5'>....</p>
                            <BsDatabaseFillCheck className='text-7xl text-primary' />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-2 px-2 mb-[20px]'>
                            <MdAddAPhoto className='text-7xl text-primary' />
                            <p className='text-5xl rotate-90 text-gray-500 text-center translate-x-5'>....</p>
                            <p className='text-2xl font-semibold pt-4'>Photography</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
