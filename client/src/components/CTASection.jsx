import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-[#D0BCFF] py-24 px-4 md:px-12 font-inter text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E0E4C] mb-6 tracking-[-0.07em]">
          Ready to Hire Better, Faster?
        </h2>
        <p className="text-lg md:text-2xl text-[#1E0E4C] font-medium mb-12 tracking-[-0.03em] opacity-90">
          Join 500+ companies hiring smarter with AI
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#2E1065] text-[#D0BCFF] px-8 py-3.5 rounded-lg font-medium text-lg hover:bg-[#1a0f40] transition cursor-pointer w-full sm:w-auto">
            Start Free Trial
          </button>
          <button className="border border-[#2E1065]/30 text-[#2E1065] px-8 py-3.5 rounded-lg font-medium text-lg hover:bg-white/10 transition backdrop-blur-sm cursor-pointer w-full sm:w-auto border-opacity-50">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
