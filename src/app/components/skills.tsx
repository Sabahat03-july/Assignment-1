import React from "react";

const Skills = () => {
  const mySkills = [
    { skillName: "HTML", percentage: 100 },
    { skillName: "CSS", percentage: 98 },
    { skillName: "Next JS", percentage: 95 },
    { skillName: "Wordpress", percentage: 97 },
    { skillName: "TypeScript", percentage: 100 },
    { skillName: "Tailwind", percentage: 70 },
  ];

  return (
    <div id="skill" className="h-[85vh] overflow-y-auto p-6">
      <h1 className="text-2xl font-semibold tracking-tight uppercase mb-6">Skills</h1>
      <div className="flex flex-wrap -m-4">
        {mySkills.map((item, i) => (
          <div key={i} className="p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                </div>
                <h2 className="text-lg font-semibold tracking-tight">
                  {item.skillName}
                </h2>
              </div>
              <div className="relative w-full h-1 bg-gray-300 rounded-md">
                <div
                  className="absolute top-0 left-0 h-1 rounded-md"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: "#3b82f6", // Use your desired color
                  }}
                />
              </div>
              <h2 className="text-sm text-blue-500 text-right font-semibold tracking-tight">
                {`${item.percentage}%`}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
