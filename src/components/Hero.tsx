import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full">
      <div>
        <p className="text-primary font-mono mb-5 text-sm lg:text-base">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Musila Peter.
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate mb-6 leading-tight">
          I build things for the web.
        </h2>
        <p className="text-slate text-base lg:text-lg mb-8 lg:mb-10 max-w-md">
          I'm a software engineer specializing in building (and occasionally designing) 
          exceptional digital experiences. Currently, I'm focused on building accessible, 
          human-centered products.
        </p>
        <a
          href="#projects"
          className="border border-primary text-primary px-6 py-3 lg:py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors inline-block"
        >
          Check out my projects!
        </a>
      </div>
    </section>
  );
};

export default Hero;