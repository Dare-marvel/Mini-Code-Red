import React, { useEffect } from 'react';
import backgroundImage from '../../assets/interfaces/final.jpg';

const FinalPage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    </div>
  );
};

export default FinalPage;