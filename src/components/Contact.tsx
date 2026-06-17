import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-20 w-full">
      <div className="w-full">
        <p className="text-primary font-mono text-sm mb-2 text-center lg:text-left">04. What's Next?</p>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 text-center lg:text-left">Let's Build Something That Moves the Needle</h2>
        <p className="text-slate mb-8 lg:mb-12 text-center lg:text-left max-w-md mx-auto lg:mx-0 text-sm lg:text-base">
          I am currently available for forward deployment opportunities where I can 
          leverage data and AI to solve tough technical challenges. Whether you need 
          an engineer embedded in your team or a technical strategist to architect 
          your next system—let's talk.
        </p>
        <div className="text-center lg:text-left">
          <a
            href="https://mail.google.com/mail/?view=cm&to=musiladev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 lg:px-8 py-3 lg:py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;