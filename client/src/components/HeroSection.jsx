import { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-[#D0BCFF] min-h-screen px-4 md:px-16 lg:px-24 pt-6 relative overflow-hidden">
      <nav className="flex justify-between items-center mb-10 md:mb-20 relative z-50">
        <div className="text-3xl font-bold tracking-[-0.07em] text-[#2E1065]">RecruiterAi</div>
        
        <div className="hidden md:flex gap-8 font-medium tracking-[-0.03em] text-xl text-[#2E1065]">
          <p className="hover:text-black cursor-pointer transition-colors">Features</p>
          <p className="hover:text-black cursor-pointer transition-colors">How It Works</p>
          <p className="hover:text-black cursor-pointer transition-colors">Pricing</p>
        </div>

        <button 
          className="bg-[#2E1065] text-xl text-[#D0BCFF] tracking-[-0.07em] px-6 py-2.5 rounded-lg font-medium hover:bg-[#1a0f40] transition hidden md:block cursor-pointer"
        >
          Get Started
        </button>

        <button 
          className="md:hidden text-[#2E1065] p-2 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-around">
            <span 
              className={`block w-full h-0.5 bg-current transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`} 
            />
            <span 
              className={`block w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} 
            />
            <span 
              className={`block w-full h-0.5 bg-current transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`} 
            />
          </div>
        </button>
      </nav>

      <div 
        className={`fixed inset-0 bg-[#D0BCFF] z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'
        }`}
      >
          <p  className="text-2xl font-medium tracking-[-0.03em] text-[#2E1065] hover:text-black" onClick={closeMenu}>Features</p>
          <p  className="text-2xl font-medium tracking-[-0.03em] text-[#2E1065] hover:text-black" onClick={closeMenu}>How It Works</p>
          <p  className="text-2xl font-medium tracking-[-0.03em] text-[#2E1065] hover:text-black" onClick={closeMenu}>Pricing</p>
          <button className="bg-[#2E1065] text-xl text-[#D0BCFF] tracking-[-0.07em] px-8 py-3 rounded-lg font-medium hover:bg-[#1a0f40] transition cursor-pointer" onClick={closeMenu}>
            Get Started
          </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 items-start relative">
        
        <div className="lg:w-1/2 pt-8 z-10">
          <div className="inline-block px-3 py-1 border border-[#2E1065] rounded-full text-sm font-medium text-[#2E1065] mb-6">
            AI-Powered Recruiting Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-[-0.07em] text-[#2E1065]">
            Every Hire,<br />
            Faster and Better
          </h1>

          <p className="text-lg tracking-[-0.07em] md:text-2xl mb-10 max-w-lg font-medium text-[#1E0E4C]">
            Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team
          </p>

          <div className="flex flex-col tracking-[-0.07em] sm:flex-row gap-4">
            <button 
              className="bg-[#2E1065] text-[#D0BCFF] px-8 py-3.5 rounded-lg font-medium text-xl hover:bg-[#1a0f40] transition cursor-pointer"
            >
              Start Hiring Smarter
            </button>
            <button 
              className="border border-[#1E0E4C]/30 text-[#1E0E4C] px-8 py-3.5 rounded-lg font-medium text-xl hover:bg-white/10 transition backdrop-blur-sm cursor-pointer"
            >
              See How It Works
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 relative h-[600px] w-full hidden lg:block">
          {/* Card 1 - Sarah K */}
          <div className="absolute top-0 right-[20%] z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="tracking-[-0.07em] bg-white p-6 rounded-xl shadow-lg w-80 transform -rotate-1"
            >
              <p className="text-sm font-medium mb-4 text-gray-800">
                "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors."
              </p>
              <div>
                <div className="font-bold text-sm text-gray-900">Sarah K.</div>
                <div className="text-xs text-gray-500">Founder at TechStart</div>
              </div>
            </motion.div>
          </div>

          {/* Card 2 - Rahul M */}
          <div className="absolute top-[160px] right-0 z-20">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="tracking-[-0.07em] bg-white p-6 rounded-xl shadow-lg w-80 transform rotate-2"
            >
              <p className="text-sm font-medium mb-4 text-gray-800">
                "Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months."
              </p>
              <div>
                <div className="font-bold text-sm text-gray-900">Rahul M.</div>
                <div className="text-xs text-gray-500">Hiring Manager at GrowthCo</div>
              </div>
            </motion.div>
          </div>

           {/* Card 3 - Priya S */}
           <div className="absolute top-[320px] left-[10%] z-30">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="tracking-[-0.07em] bg-white p-6 rounded-xl shadow-lg w-80 transform -rotate-2"
            >
              <p className="text-sm font-medium mb-4 text-gray-800">
                "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly."
              </p>
              <div>
                <div className="font-bold text-sm text-gray-900">Priya S.</div>
                <div className="text-xs text-gray-500">CEO at InnovateLabs</div>
              </div>
            </motion.div>
          </div>

          {/* Card 4 - Amit T */}
          <div className="absolute top-[460px] right-[10%] z-20">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
              className="tracking-[-0.07em] bg-white p-6 rounded-xl shadow-lg w-80 transform rotate-1"
            >
              <p className="text-sm font-medium mb-4 text-gray-800">
                "Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening."
              </p>
              <div>
                <div className="font-bold text-sm text-gray-900">Amit T.</div>
                <div className="text-xs text-gray-500">Head of HR at ScaleUp</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;