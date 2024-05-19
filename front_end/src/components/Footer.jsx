import React from 'react'
import GigGalaxy from '../assets/GigGalaxy.svg';
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
    return (
        <div data-aos="zoom-down" className='bg-white'>
            <div className='max-w-[1200px] mx-auto'>
                <div className="grid md:grid-cols-3 py-5 items-center">
                    <div data-aos="fade-up" data-aos-delay="400" className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-Fontprimary font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                            <img src={GigGalaxy} alt='' className='w-20 '></img>
                            Gig Galaxy
                        </h1>
                        <p>Welcome to Gig Galaxy, where freelancers reach for the stars! 
                            Navigate through a universe of projects, 
                            from coding comets to writing supernovas. 
                            Join us on this cosmic adventure and let 
                            Gig Galaxy be your rocket ship to success!</p>
                        <br />
                        <div className='flex items-center gap-3'>
                            <FaPhone /> +212 64484-0406
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <a href="#">
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl' />
                            </a>
                          
                            <a href="#">
                                <FaLinkedin className='text-3xl' />
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                       <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Graphics & Design</a>

                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Digital Marketing</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Writing & Translation</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Video & Animation</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Music & Audio</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Music & Audio</a>
                                
                            </li>
                            
                        </ul>
                       </div>
                    </div>
                    <div>
                       <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Graphics & Design</a>

                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Digital Marketing</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Writing & Translation</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Video & Animation</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Music & Audio</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Music & Audio</a>
                                
                            </li>
                            
                        </ul>
                       </div>
                    </div>
                    <div>
                       <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Graphics & Design</a>

                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Digital Marketing</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Writing & Translation</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Video & Animation</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Music & Audio</a>
                                
                            </li>
                            <li className='hover:text-primary duration-300'>
                                <a href="#">Music & Audio</a>
                                
                            </li>
                            
                        </ul>
                       </div>
                    </div>
                  </div>

                </div>
                <div>
                    <div className='text-xl text-center font-bold font-Fontprimary py-10 border-t-2 border-gray-300/50'>
                        @copyright 2024 || Gig Galaxy
                    </div>
                </div>
            </div>
        </div>
    )
}
