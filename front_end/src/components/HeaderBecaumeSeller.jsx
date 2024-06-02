import React from 'react'
import GigGalaxy from '../assets/GigGalaxy.svg';
import HorizontalLinearAlternativeLabelStepper from './ui/HorizontalLinearStepper';

export default function HeaderBecaumeSeller() {
    return (

        <>

            <header className=" w-full  md:bg-transparent ">
                <nav className="lg:px-18 px-4">
                    <div className="flex items-center justify-between text-base gap-8">
                        <div className="space-x-40 flex items-center">
                            <a
                                href="/"
                                className="text-2xl font-semibold flex items-center space-x-3"
                            >
                                <img
                                    src={GigGalaxy}
                                    alt="GigGalaxy"
                                    className="w-24 inline-block items-center"
                                />
                                <span className="text-black">Gig Galaxy</span>
                            </a>
                        </div>
                    </div>
                </nav>
                
            </header>
        </>
    )
}
