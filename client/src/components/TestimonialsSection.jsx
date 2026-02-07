const testimonials = [
  {
    quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
    author: "Rahul Mehta",
    role: "Founder, TechStart Solutions"
  },
  {
    quote: "The AI screening saved us hundreds of hours. We're now interviewing only pre-qualified candidates, and our hiring quality has improved by 60%. Best investment we've made.",
    author: "Priya Sharma",
    role: "Head of HR, GrowthScale Inc"
  },
  {
    quote: "RecruiterAI has completely transformed how we find talent. The automation feels personal, and candidates love the quick responses. It's like having an extra recruiter on the team.",
    author: "Amit Patel",
    role: "CTO, FutureWave"
  },
  {
    quote: "The quality of candidates we interview now is unmatched. The AI understands our requirements better than most agencies we've worked with.",
    author: "Sneha Gupta",
    role: "VP of People, InnovateNow"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-7xl tracking-[-0.07em] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#D0BCFF] p-8 md:p-12 rounded-[2rem] flex flex-col justify-between min-h-[300px]">
            <p className="text-xl md:text-3xl tracking-[-0.07em] font-semibold text-[#1E0E4C] mb-8">
              "{testimonial.quote}"
            </p>
            <div>
              <div className="font-semibold text-xl text-[#1E0E4C] mb-1">
                {testimonial.author}
              </div>
              <div className="text-[#1E0E4C] text-sm md:text-base opacity-90">
                {testimonial.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
