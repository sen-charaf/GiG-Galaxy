import { axiosClient } from '@/api/axios';
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
       axiosClient.get("/get_categories") .then((response) => {
           setCategories(response.data)
       }).catch((error) => {
           console.error(error);
       })
    },[])
    
    return (
        <>
            {
                
                    <div>
                        <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className="">
                            {"Categories"}</h1>
                            {categories && (
                                <div>
                                    
                                    <div className='absolute top-15 hidden group-hover:block hover:block'>
                                        <div className='py-3'>
                                            <div className='w-4 h-4 left-3 absolute mt-1 bg-white'></div>
                                        </div>
                                        <div className='bg-white shadow-xl p-5 grid grid-cols-6 gap-10'>
                                            {
                                                categories.map((category) => (
                                                    <div>
                                                        <h1 className='text-lg font-semibold flex'>{category.name}</h1>
                                                        {category.subcategories.map(subcategory => (
                                                            <li className='text-sm text-gray-600 my-2.5'>
                                                                <Link to={`/${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`} className='hover:text-primary'>{subcategory.name}</Link>
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
                
            }
        </>
    )
}
export default NavLinks;