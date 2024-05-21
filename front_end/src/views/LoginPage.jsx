import LoginForm from '@/components/LoginForm'
import React from 'react'
import logo from "../assets/Untitled design (4).png";
export default function LoginPage() {
  return (
    // Div parent avec min-height pour la hauteur complète de la fenêtre et flex pour le centrage
    <div className="flex items-center justify-center w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 background">

      {/* Div interne avec flex pour gérer la disposition des deux div enfants */}
      <div className="flex w-full max-w-5xl bg-white" style={{ padding: '23px 23px 23px 23px' }}>

        {/* Div pour la partie de la page web (signup/login) */}
        <div className="w-1/2 mr-10">
             <LoginForm />
        </div>
        
        {/* Div pour l'image */}
        <div className="w-3/5">
        <img src={logo} alt="Your Image" className="h-full w-full object-cover rounded-lg" />

        </div>
      </div>
    </div>
  )
}
