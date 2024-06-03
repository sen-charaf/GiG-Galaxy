import React from 'react'
import { Link } from 'react-scroll'

const NavLinks = () => {
    const links = [
        {
            name: "Categories",
            submenu: true,
            sublinks: [
                {
                Head: "Graphics & Design",
                sublink: [
                    { name: "Graphics & Design", link: "/" },
                    { name: "Digital Marketing", link: "/" },
                    { name: "Writing & Translation", link: "/" },
                    { name: "Video & Animation", link: "/" },
                    { name: "Music & Audio", link: "/" }
                ]
            },{
                Head: "Graphics & Design",
                sublink: [
                    { name: "Graphics & Design", link: "/" },
                    { name: "Digital Marketing", link: "/" },
                    { name: "Writing & Translation", link: "/" },
                    { name: "Video & Animation", link: "/" },
                    { name: "Music & Audio", link: "/" }
                ]
            },{
                Head: "Graphics & Design",
                sublink: [
                    { name: "Graphics & Design", link: "/" },
                    { name: "Digital Marketing", link: "/" },
                    { name: "Writing & Translation", link: "/" },
                    { name: "Video & Animation", link: "/" },
                    { name: "Music & Audio", link: "/" }
                ]
            },
            {
                Head: "Graphics & Design",
                sublink: [
                    { name: "Graphics & Design", link: "/" },
                    { name: "Digital Marketing", link: "/" },
                    { name: "Writing & Translation", link: "/" },
                    { name: "Video & Animation", link: "/" },
                    { name: "Music & Audio", link: "/" }
                ]
            }
            ]
        }
    ];
    return (
        <>
            {
                links.map((link) => (
                    <div>
                        <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className="">
                            {link.name}</h1>
                            {link.submenu && (
                                <div>
                                    
                                    <div className='absolute top-15 hidden group-hover:block hover:block'>
                                        <div className='py-3'>
                                            <div className='w-4 h-4 left-3 absolute mt-1 bg-white'></div>
                                        </div>
                                        <div className='bg-white shadow-xl p-5 grid grid-cols-6 gap-10'>
                                            {
                                                link.sublinks.map((mysublinks) => (
                                                    <div>
                                                        <h1 className='text-lg font-semibold flex'>{mysublinks.Head}</h1>
                                                        {mysublinks.sublink.map(slink => (
                                                            <li className='text-sm text-gray-600 my-2.5'>
                                                                <Link to={slink.link} className='hover:text-primary'>{slink.name}</Link>
                                                            </li>
                                                        ))}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default NavLinks;