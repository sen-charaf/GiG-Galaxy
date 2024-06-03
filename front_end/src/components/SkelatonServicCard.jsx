import { Skeleton } from '@mui/material'
import React from 'react'

export default function SkelatonServicCard() {
  return (
    <div
                      className={`flex w-[${22}rem]  flex-col space-y-2 bg-white p-4 border rounded group hover:cursor-pointer `}
                    >
                      {
                        <Skeleton
                          variant="rectangular"
                          width={320}
                          height={176}
                        />
                      }
                      <div className="flex justify-between w-full">
                        <div className="flex items-center space-x-1">
                          <Skeleton variant="circular" width={28} height={28} />
                          <div className=" font-custom font-bold text-sm ">
                            <Skeleton variant="text" width={100} height={20} />
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="size-7">
                            <Skeleton variant="text" width={20} height={20} />
                          </div>
                          <div className="font-custom font-semibold">
                            <Skeleton variant="text" width={20} height={20} />
                          </div>
                          <div className="font-custom  text-gray-400"></div>
                        </div>
                      </div>
  
                      <div className="w-full mx-1 group-hover:text-primary  transition-all ease-in-out duration-300 ">
                        <Skeleton variant="text" width={300} height={20} />
                      </div>
  
                      <div className="flex justify-between items-center w-full">
                        <div className="w-full mx-1 font-custom font-bold">
                          {" "}
                          <Skeleton variant="text" width={100} height={20} />
                        </div>
                        <div className="w-full text-right font-custom  text-xs text-gray-400"></div>
                      </div>
                    </div>
  )
}
