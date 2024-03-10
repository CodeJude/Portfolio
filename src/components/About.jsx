import { Profile } from "../assets";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="w-full flex flex-col justify-center items-center h-full ">
        <div className="max-w-[1000px] w-full grid-cols-2 grid gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Take a moment to discover who I am.</p>
            <div className="flex justify-end mt-6 ">
              <img src={Profile} alt="" className=" w-60 rounded-3xl" />
            </div>
          </div>

          <div>
            I'm a dedicated Backend Developer with a passion for crafting the backbone of web
            applications. I possess a strong command of languages such as JavaScript and Python,
            alongside frameworks like Node.js and FastAPI, allowing me to excel in server-side
            development. My journey into backend technologies began with a fascination for
            problem-solving with love for creating efficient, scalable systems. Specializing in
            crafting APIs, managing databases, and architecting core functionalities, I ensure
            seamless and intuitive user experiences. In addition to my coding expertise, I stay
            abreast of technological advancements, continuously honing my skills to deliver
            innovative solutions. With knowledge in technologies like Docker, databases like
            PostgreSQL and MongoDB with cloud hosting like AWS. I'm ready to collaborate and build
            the robust, reliable backend foundation your project deserves.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
