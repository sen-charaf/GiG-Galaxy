import React from 'react'
import img from '../assets/img.jpg'

export default function HomePage() {

  const bgimage = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 96px',
    backgroundSize: 'cover',
    height: '100%',
  }
  return (
    <div style={bgimage} className='min-h-[500px] '>
      <div className='min-h-[664px] flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>

          <div className='grid grid-cols-1 sm:grid-cols-2 font-bold '>
            <div className='flex flex-col justify-center gap-4 sm:pt-0 text-center sm:text-left'>
              <h1 
              data-aos="zoom-out"
              className='text-3xl sm:text-5xl md:text-1xl text-white'>
                Find the right {" "}
                <span className='font-Fontprimary bg-clip-text  text-transparent bg-gradient-to-r from-[#8C41F3] to-[#8C41F3] drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)]'>
                  FREELANCE
                </span>{" "}

                service, right away
              </h1>
              <div
              data-aos="fade-up" 
              className='md:flex items-center'>
                <form className='flex pt-5'>
                  <input
                    type="text"
                    placeholder="Search for any service ..."
                    className="w-[40rem] px-5 py-5 border border-gray-400 rounded-l-md focus:outline-none"
                  />
                  <button type="submit" className="px-9 py-1 bg-[#8C41F3] text-white rounded-r">Search</button>

                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
