import React from 'react'
import Trading from '../assets/Trading.jpg'
import AI from '../assets/AI.jpg'
import Audios from '../assets/Audios.jpg'
import Business from '../assets/Business.jpg'
import designe from '../assets/designe.jpg'
import Developement from '../assets/Developement.jpg'
import DigitalMarketing from '../assets/DigitalMarketing.jpg'
import EtudeForDistance from '../assets/EtudeForDistance.jpg'
import VideoAndAnimation from '../assets/VideoAndAnimation.jpg'
import write from '../assets/write.jpg'
import Engineeringandarchitecture from '../assets/Engineeringandarchitecture.jpg'
import Seo from '../assets/Seo.jpg'

const ProductsData = [
    {
        id: 1,
        img: Trading,
        name: "Trading",
    },
    {
        id: 2,
        img: AI,
        name: "AI"

    },
    {
        id: 3,
        img: Audios,
        name: "Audios"
    },
    {
        id: 4,
        img: Business,
        name: "Business"
    },
    {
        id: 5,
        img: designe,
        name: "Designe"
    },
    {
        id: 6,
        img: Developement,
        name: "Developement"
    },
    {
        id: 7,
        img: DigitalMarketing,
        name: "Digital Marketing"
    },
    {
        id: 8,
        img: EtudeForDistance,
        name: "Etude For Distance"
    },
    {
        id: 9,
        img: VideoAndAnimation,
        name: "Video And Animation"
    },
    {
        id: 10,
        img: write,
        name: "write"
    },
    {
        id: 11,
        img: Engineeringandarchitecture,
        name: "Engineering and architecture"
    },
    {
        id: 12,
        img: Seo,
        name: "SEO"
    }
]
export default function OurService() {
    return (
        <div className=' mt-14 mb-12'>
            <div className='items-center justify-center mx-12'>
                <div className='text-center mb-10 max-x-[600px]'>
                    <h1 
                    data-aos="zoom-in"
                    className='lg-ml-45 text-4xl font-Fontprimary font-bold text-black'>Our Service</h1>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-full grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-col-6 place-items-center gap-5'>
                        {
                            ProductsData.map((data) => (
                                <div className='' data-aos="zoom-in"
                                data-aos-offset="0">
                                    <img src={data.img} alt=""
                                        className='h-[250px] w-[2000px] object-cover rounded-md' />
                                    <div className='flex justify-center'>
                                        <h2 className='font-semibold text-2xl'>{data.name}</h2>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
