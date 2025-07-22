import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 bg-[#0f172a] pt-20 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
      <p className="text-center max-w-2xl mx-auto">
        Hi, I'm Tristan – an aspiring developer passionate about clean code and
        sleek UI. This section introduces who I am and what I do.
      </p>
    </section>
  );
};

export default About;
