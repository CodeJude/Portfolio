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
            I'm a dedicated backend developer passionate about crafting the backbone of web
            applications. With expertise in Python, JavaScript, Node.js, and FastAPI, I excel in
            server-side development. Specializing in creating APIs, managing databases, and
            architecting core functionalities, I ensure seamless user experiences. I stay updated
            with technological advancements, continuously honing my skills. Experienced in Docker,
            PostgreSQL, MongoDB, and AWS cloud hosting, I'm ready to collaborate on building robust,
            reliable backend solutions for your project. When not immersed in lines of code, you'll
            find me exploring histories, discovering new places, or simply savoring a good cup of
            coffee.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
