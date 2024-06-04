import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sent from '../assets/Sent.jpg';

export default function EmailSent() {
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const navigate = useNavigate();

    const handleResendEmail = () => {
        setIsResendDisabled(true);
        setCountdown(10); // Set countdown to 10 seconds
    };

    const handleReturnToLogin = () => {
        navigate('/login');
    };

    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else if (countdown === 0 && isResendDisabled) {
            setIsResendDisabled(false);
        }
        return () => clearTimeout(timer);
    }, [countdown, isResendDisabled]);

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center rounded-lg p-10 border shadow-lg'>
                <img src={Sent} className='cover w-[40rem]' alt="Email Sent" />
                <div className='text-center mt-4'>
                    <h2 className='text-4xl font-semibold text-zinc-500'>Email Sent Successfully</h2>
                </div>
                
                <div className='flex mt-5 justify-center items-center'>
                    <button
                        onClick={handleResendEmail}
                        disabled={isResendDisabled}
                        className={`mt-2 text-white border text-xl bg-[#8C41F3] p-3 rounded duration-500 ${
                            isResendDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#8C41F3] hover:border-[#8C41F3] hover:bg-white'
                        }`}
                    >
                        {isResendDisabled ? `Resend (${countdown}s)` : 'Resend Email'}
                    </button>

                    <button
                        onClick={handleReturnToLogin}
                        className='mt-2 text-[#8C41F3] border-[#8C41F3] border ml-10 text-xl p-3 rounded hover:text-white hover:bg-[#8C41F3] duration-500'
                    >
                        Return to Login
                    </button>
                </div>
            </div>
        </div>
    );
}
