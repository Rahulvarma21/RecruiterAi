import React, { useState } from 'react';

const faqs = [
  {
    question: "How does AI screening work?",
    answer: "Our AI analyzes resumes using natural language processing to match candidates against your job requirements. It evaluates skills, experience, education, and cultural fit indicators. The system ranks candidates based on relevance and automatically sends screening questions to top matches. You get a scored list of the best candidates without reading hundreds of resumes manually."
  },
  {
    question: "Does RecruiterAI integrate with our existing ATS?",
    answer: "Yes, RecruiterAI integrates seamlessly with most major ATS platforms including Greenhouse, Lever, Ashby, and more. Our two-way sync ensures your data is always up-to-date across both systems."
  },
  {
    question: "What's the pricing structure?",
    answer: "We offer flexible pricing options to suit teams of all sizes. From a starter plan for small startups to custom enterprise solutions. Contact our sales team for a detailed quote tailored to your hiring needs."
  },
  {
    question: "How long does setup take?",
    answer: "Setup is quick and easy. Most teams are up and running within 24 hours. Our onboarding team will help you configure your workflows and integrations to ensure a smooth transition."
  },
  {
    question: "Is candidate data secure?",
    answer: "Absolutely. We prioritize data security and are GDPR and SOC 2 Type II compliant. All candidate data is encrypted at rest and in transit to ensure the highest level of protection."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white py-24 px-4 md:px-12 font-inter">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 tracking-[-0.07em]">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#E5E7EB] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl md:text-2xl font-bold text-black tracking-[-0.03em]">
                  {faq.question}
                </span>
                <span 
                    className={`transform transition-transform duration-300 text-2xl font-light ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 md:p-8 pt-0 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
