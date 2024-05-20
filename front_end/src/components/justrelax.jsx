import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export default function ProfileCard() {
  const [online, setOnline] = useState(true); // Par défaut, l'utilisateur est en ligne

  return (
    <Card className="w-11/12 relative">
      <CardHeader floated={false} className="h-80 relative">
        <img src="../src/assets/ronaldo.jpeg" alt="profile-picture" />
        <div className={`absolute bottom-0 right-0  mr-[-100px] w-6 h-6 rounded-full ${online ? 'bg-green-500' : 'bg-gray-500'}`} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Cristiano Ronaldo
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Ai Professor
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
    <div className='flex justify-center '>
      <img  className="w-8" src="../src/assets/location-svgrepo-com.svg" alt="locatin_Selller" />
    <span className='mt-[5px]'> Morocco , Agadir </span> 
    </div>
    <div className='flex justify-center '>
      <img  className="w-8" src="../src/assets/crown-2-svgrepo-com.svg" alt="succses" />
    <span className='mt-[5px]'> 90% Job Success</span> 
    </div>
    
      </CardFooter>
    </Card>
  );
}
