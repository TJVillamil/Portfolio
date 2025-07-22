import React from "react";
import SillimanLogo from "../../assets/SillimanLogo.png";

const Education: React.FC = () => {
  const coursework = [
    "C++ Programming",
    "PHP",
    "MySQL",
    "Embedded Systems",
    "Software Development",
    "OOP Concepts",
    "Engineering",
    "HDL",
    "Fundamentals of Electronics",
  ];

  const courseworkHS = [
    "Physics",
    "Chemistry",
    "Pre-Calculus",
    "Statistics",
    "Algebra",
    "Research Paper",
    "English",
    "Filipino",
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] pt-20 px-4 p-4">
      <h1 className="text-center text-4xl font-bold text-white mb-8">
        Education
      </h1>

      <div className="flex flex-wrap items-center space-y-8 gap-4">
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/30 rounded-lg shadow-md p-6 text-white">
          <div className="flex items-center p-2 space-x-4 mb-6">
            <img
              src={SillimanLogo}
              alt="Silliman Logo"
              className="bg-white border-2 border-white rounded-full object-contain w-16 h-16"
            />
            <div className="p-3">
              <h3 className="text-xl font-bold">Silliman University</h3>
              <p className="text-sm text-gray-200">
                Bachelor of Science in Computer Engineering
              </p>
              <p className="text-sm text-gray-200">
                S.Y. 2021 - 2024 | Dumaguete City, Philippines
              </p>
              <p className="text-sm text-gray-200">Graduated May 2025</p>
            </div>
          </div>

          <h4 className="text-lg p-2 font-semibold mb-2">
            Relevant Coursework:
          </h4>
          <div className="flex flex-wrap gap-2 pt-0 p-2 mt-4">
            {coursework.map((course, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs text-white shadow hover:bg-white/20 transition"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/30 rounded-lg shadow-md p-6 text-white">
          <div className="flex items-center p-2 space-x-4 mb-6">
            <img
              src={SillimanLogo}
              alt="Silliman Logo"
              className="bg-white border-2 border-white rounded-full object-contain w-16 h-16"
            />
            <div className="p-3">
              <h3 className="text-xl font-bold">
                Liceo del Verbo Divino - Highschool to Senior Highschool
              </h3>
              <p className="text-sm text-gray-200">
                STEM - Science Technology Engineering and Mathematics - with
                Honors
              </p>
              <p className="text-sm text-gray-200">
                S.Y. 2014 - 2020 | Tacloban City, Philippines
              </p>
              <p className="text-sm text-gray-200">Graduated 2021</p>
            </div>
          </div>

          <h4 className="text-lg p-2 font-semibold mb-2">
            Relevant Coursework:
          </h4>
          <div className="flex flex-wrap gap-2 pt-0 p-2 mt-4">
            {courseworkHS.map((course, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs text-white shadow hover:bg-white/20 transition"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
