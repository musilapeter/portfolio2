import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full">
      <div>
        <p className="text-primary font-mono mb-5 text-sm lg:text-base">Hello, I am</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Musila Peter.
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate mb-6 leading-tight">
          Forward Deployed Engineer.
        </h2>
        <p className="text-slate text-base lg:text-lg mb-4 max-w-lg">
          I specialize in bridging the gap between complex business logic and scalable 
          software architecture. I embed with clients to diagnose operational bottlenecks, 
          design custom AI-driven solutions, and ensure seamless deployment into existing 
          enterprise ecosystems.
        </p>
        <p className="text-white font-semibold text-sm lg:text-base mb-3 italic">
          I don't just ship code; I ship outcomes.
        </p>
        <p className="text-slate font-mono text-xs lg:text-sm mb-8 lg:mb-10">
          <span className="text-primary">Currently focused on:</span>{' '}
          High-frequency data processing, LLM integration for legacy systems, and zero-downtime migrations.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#experience"
            className="border border-primary text-primary px-6 py-3 lg:py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors inline-block"
          >
            View My Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;