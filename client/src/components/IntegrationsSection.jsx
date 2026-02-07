import angel from '../assets/angel.svg';
import glassdoor from '../assets/glassdoor.png';
import indeed from '../assets/indeed.svg';
import linkedin from '../assets/linkedin.svg';
import naukri from '../assets/nauki.svg';
import monster from '../assets/mons.svg';
import cutshort from '../assets/cut.svg'; 
import wellfound from '../assets/well.svg';

const logos = [
  { name: 'Naukri', src: naukri },
  { name: 'Indeed', src: indeed },
  { name: 'AngelList', src: angel },
  { name: 'LinkedIn', src: linkedin },
  { name: 'Glassdoor', src: glassdoor },
  { name: 'Monster', src: monster },
  { name: 'CutShort', src: cutshort },
  { name: 'Wellfound', src: wellfound },
];

const IntegrationsSection = () => {
  return (
    <div className="bg-white py-20 px-4 font-inter overflow-hidden">
        <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-[-0.07em]">
            Post Once, Reach Everywhere
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium tracking-[-0.03em]">
            RecruiterAI automatically syncs your job postings across all major platforms
            </p>
        </div>

        <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll">
                <div className="flex items-center gap-16 mx-8">
                    {logos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="w-40 md:w-52 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100">
                            <img src={logo.src} alt={`${logo.name} logo`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-16 mx-8">
                     {logos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="w-40 md:w-52 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100">
                            <img src={logo.src} alt={`${logo.name} logo`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default IntegrationsSection;
