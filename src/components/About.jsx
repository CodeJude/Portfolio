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
            <p>Hi. I'm Jude, Take a moment to browse and discover who I am.</p>
          </div>
          <div>
            I'm a dedicated backend developer with a passion for crafting the backbone of web
            applications. I possess a strong command of languages such as Python and JavaScript,
            alongside frameworks like Node.js and FastAPI, allowing me to excel in server-side
            development. My journey into backend technologies began with a fascination for
            problem-solving and a love for creating efficient, scalable systems. Specializing in
            crafting APIs, managing databases, and architecting core functionalities, I ensure
            seamless and intuitive user experiences. In addition to my coding expertise, I stay
            abreast of technological advancements, continuously honing my skills to deliver
            innovative solutions. When not immersed in lines of code, you'll find me exploring
            histories, discovering new places, or simply savoring a good cup of coffee. With
            knowledge in Docker, databases such as PostgreSQL and MongoDB, and cloud hosting using
            AWS, I'm ready to collaborate and build the robust, reliable backend foundation your
            project deserves.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
