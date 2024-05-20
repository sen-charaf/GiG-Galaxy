// App.jsx

import React from "react";
import ProfileCard from "../components/ProfileCard";
import Experience from "../components/Experience";
import "../styles/SellerProfile.css"; // Assurez-vous que le fichier CSS est correctement importé
// Autres importations et composants
import AboutTheSeller from "../components/GeneralInformations";
import DiffComponent from "../components/diffComp";
import BackGround from "../components/backgroung";
import Certifications from "../components/Certifications";
import Skill from "../components/Skills";
import CarouselComponent from "../components/CarouselComponent"
function SellerProfile() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript JavaScript JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Bootstrap",
    "Php",
    "Laravel",
    "Bootstrap",
    

    // Ajoutez d'autres compétences si nécessaire
  ];
  return (
    <div className="flex bg-g">
      <div className="w-2/5 h-screen overflow-hidden sticky top-0 flex justify-center items-center">
        <ProfileCard></ProfileCard>
      </div>

      {/* Deuxième partie - Reste de l'écran et scrollable */}
      <div className="flex-1 h-full overflow-y-auto mt-20  custom-mt-1900  scrollbar-hide ">
        <AboutTheSeller className="mb-8 "></AboutTheSeller>

        <div className="flex justify-center items-center space-x-4 mb-[50px]">
          <DiffComponent
            className="flex-1"
            color="#FF0000"
            text="Completed Tasks"
            number="50+"
          />
          <DiffComponent
            className="flex-1"
            color="#002BFF"
            text="Houre Of work"
            number="84"
          />
          <DiffComponent
            className="flex-1"
            color="#515A5A"
            text="Total Jobs"
            number="20"
          />
        </div>
        <div>
          <div className=" pl-8 pb-8 ">
            <h1 className="not-italic text-purple-500 text-2xl font-semibold  ">
              Skills
            </h1>
          </div>
          <div className=" ml-10 flex flex-wrap gap-2 ">
            {skills.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
        </div>
        <Experience></Experience>
        <BackGround></BackGround>
        <Certifications></Certifications>
       <CarouselComponent></CarouselComponent>
        
      </div>
    </div>
  );
}

export default SellerProfile;
