import React from 'react';
import bargraph from '../assets/bargraph.jpg';

const AdvantageSection = () => {
  return (
    <div className="bg-white py-24 px-4 md:px-12 font-inter">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-[-0.07em]">
          The RecruiterAI Advantage
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium tracking-[-0.03em]">
          See how AI automation transforms your hiring process
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex justify-center">
        <img 
            src={bargraph} 
            alt="Comparison graph showing benefits of RecruiterAI vs Manual process" 
            className="w-full h-auto rounded-3xl object-contain max-h-[800px]"
        />
      </div>
    </div>
  );
};

export default AdvantageSection;
