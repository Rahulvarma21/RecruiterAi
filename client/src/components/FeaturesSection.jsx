import React from 'react';
import img1 from '../assets/Automated Candidate Screening & Interview Scheduling 1.jpg';
import img2 from '../assets/Multi-Stage Interview Process Automation 2.jpg';
import img3 from '../assets/Passive Candidate Re-engagement System 3.jpg';

const features = [
  {
    title: "Automated Candidate Screening & Interview Scheduling",
    image: img1,
    description: "Screen 250+ applications in minutes vs. 8 hours manually",
    layout: "left"
  },
  {
    title: "Multi-Stage Interview Process Automation",
    image: img2,
    description: "Streamline your entire interview process with automated stage transitions.",
    layout: "right"
  },
  {
    title: "Passive Candidate Re-engagement System",
    image: img3,
    description: "Automatically re-engage qualified candidates from your talent pool.",
    layout: "left"
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-24 px-4 md:px-20 font-inter">
      <div className="text-center mb-24 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-[-0.07em]">
          AI Recruiting Software That Works Like Your Own HR Team
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium tracking-[-0.03em]">
          Build custom hiring workflows in minutes. No coding required.
        </p>
      </div>

      <div className="flex flex-col gap-32 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-8">
             
             <div className={`flex ${feature.layout === 'right' ? 'justify-end' : 'justify-start'}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-black max-w-2xl tracking-[-0.07em] leading-tight">
                    {feature.title}
                </h3>
             </div>

             <div className={`flex flex-col ${feature.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                 
                 <div className="w-full lg:w-2/3 bg-[#F3F4F6] rounded-[2.5rem] p-8 md:p-12 flex items-center justify-center min-h-[400px]">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="rounded-xl w-full h-auto object-contain max-h-[500px]"
                    />
                 </div>

                 <div className="w-full lg:w-1/3">
                    <p className="text-3xl md:text-4xl font-bold text-[#2E1065] leading-[1.2] tracking-[-0.07em]">
                        {feature.description}
                    </p>
                 </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
