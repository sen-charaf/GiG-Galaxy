import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Verify from '../assets/Verify.png';
export default function EmailVerified() {


    const navigate = useNavigate();

    const handleGoToDash = () => {
        navigate('/login');
    };
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center rounded-lg p-10 border shadow-lg'>
                <img src={Verify} className='cover w-[30rem]' alt="Email Sent" />
                <div className='text-center mt-4'>
                    <h2 className='text-4xl font-semibold text-zinc-500'>Email Verified Successfully</h2>
                </div>
                
                <div className='flex mt-5 justify-center items-center'>
                    
                    <button
                        onClick={handleGoToDash}
                        className='mt-2 text-[#8C41F3] border-[#8C41F3] border ml-10 text-xl p-3 rounded hover:text-white hover:bg-[#8C41F3] duration-500'
                    >
                        To Login
                    </button>
                </div>
            </div>
        </div>
    );
}
