import { Aws, Node, Docker, TypeScript, Postman, FastAPI, Git, PostgreSQL } from "../assets";

import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full">
        <div>
          <p className="text-4xl border-b-4 border-pink-600 font-bold inline ">Skills</p>
          <p className="py-4">These are some of the Technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <SkillCard props={{ logo: Node, name: "Nodejs" }} />
          <SkillCard props={{ logo: FastAPI, name: "FastAPI" }} />
          <SkillCard props={{ logo: TypeScript, name: "TypeScript" }} />
          <SkillCard props={{ logo: Postman, name: "Postman" }} />
          <SkillCard props={{ logo: Aws, name: "AWS" }} />
          <SkillCard props={{ logo: Docker, name: "Docker" }} />
          <SkillCard props={{ logo: Git, name: "Git" }} />
          <SkillCard props={{ logo: PostgreSQL, name: "PostgreSQL" }} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
