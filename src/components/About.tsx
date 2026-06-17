import React from 'react';
import photo from '../assets/photo.jpg';

const About: React.FC = () => {
  const tools = [
    'Python (FastAPI, Pandas)',
    'JavaScript/TypeScript (Node.js, React)',
    'Docker/Kubernetes',
    'MongoDB/PostgreSQL',
    'Cloud (AWS/Azure)',
    'Apache Airflow (Orchestration)',
  ];

  const competencies = [
    {
      title: 'System Architecture',
      desc: 'Designing scalable, fault-tolerant systems.',
    },
    {
      title: 'AI Integration',
      desc: 'Deploying LLMs and predictive models into production.',
    },
    {
      title: 'Client Engagement',
      desc: 'Translating business requirements into technical roadmaps.',
    },
    {
      title: 'Rapid Prototyping',
      desc: 'Building MVPs in weeks, not months, to validate hypotheses.',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-20 w-full">
      <div className="w-full">
        <div className="flex items-center mb-8 lg:mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white font-mono whitespace-nowrap">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="ml-4 h-px bg-slate flex-grow max-w-xs"></div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <p className="text-slate mb-4 text-sm lg:text-base">
              As a Forward Deployed Engineer, I function as a technical architect and problem solver 
              rolled into one. My expertise lies in taking ambiguous, high-stakes business 
              challenges—such as automating supply chain logistics or integrating predictive 
              analytics into legacy CRMs—and translating them into robust, production-ready systems.
            </p>
            <p className="text-slate mb-4 text-sm lg:text-base">
              I go beyond the "MERN Stack" label. My focus is on the full deployment lifecycle: 
              from whiteboarding solutions with C-suite executives to writing low-latency Python 
              backends, and finally, ensuring those systems integrate flawlessly with client 
              infrastructure using Docker and CI/CD pipelines.
            </p>
            <p className="text-slate mb-6 lg:mb-8 text-sm lg:text-base">
              I thrive in high-ambiguity environments where the problem isn't fully defined, and I 
              measure success not by lines of code written, but by the operational efficiency and 
              ROI delivered to the client.
            </p>

            {/* Core Competencies */}
            <h3 className="text-white font-semibold text-sm lg:text-base mb-3">Core Competencies:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 lg:mb-8">
              {competencies.map((comp, index) => (
                <div key={index} className="bg-dark-light/50 rounded-lg p-3 border border-slate/10">
                  <span className="text-primary font-mono text-xs lg:text-sm font-semibold">{comp.title}</span>
                  <p className="text-slate text-xs mt-1">{comp.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Tools of the Trade */}
            <h3 className="text-white font-semibold text-sm lg:text-base mb-3">Tools of the Trade:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-primary mr-2">▹</span>
                  <span className="text-slate font-mono text-xs lg:text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </div>          
          <div className="relative group order-first lg:order-last">
            <div className="relative w-full h-64 lg:h-80 bg-primary/20 rounded-lg overflow-hidden mx-auto max-w-sm">
             <img src={photo} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;