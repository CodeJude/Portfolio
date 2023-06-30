import {
  HTML,
  JavaScript,
  CSS,
  Node,
  Mongo,
  React,
  Python,
  Github,
} from "../assets";

import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full">
        <div>
          <p className="text-4xl border-b-4 border-pink-600 font-bold inline ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <SkillCard props={{ logo: Python, name: "Python" }} />
          <SkillCard props={{ logo: JavaScript, name: "JavaScript" }} />
          <SkillCard props={{ logo: HTML, name: "HTML" }} />
          <SkillCard props={{ logo: CSS, name: "CSS" }} />
          <SkillCard props={{ logo: React, name: "React" }} />
          <SkillCard props={{ logo: Node, name: "Node" }} />
          <SkillCard props={{ logo: Mongo, name: "Mongo" }} />
          <SkillCard props={{ logo: Github, name: "Github" }} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
