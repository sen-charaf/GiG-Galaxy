import LoginForm from '@/components/LoginForm'
import React from 'react'
import logo from "../assets/Untitled design (4).png";
export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-zinc-200 relative">
   
      <div className="flex flex-col justify-center w-2/3 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start w-full max-w-lg mr-10 gap-y-4">
          <h1 className="text-8xl w-[60rem] font-bold text-blue-900">Success starts here</h1>
          <p className="text-4xl text-gray-700">Enter your credentials to access your account and start your journey with us.</p>
        </div>
      </div>

     
      <div className="w-1/3 bg-slate-300"></div>

        
      <div className="absolute left-2/3 transform -translate-x-1/3 -translate-y-[-12rem] w-[35rem] flex justify-center rounded-lg items-center">
        <div className="bg-white p-6 rounded-lg shadow-md  w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
