const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="w-full flex flex-col justify-center items-center h-full ">
        <div className="max-w-[1000px] w-full grid-cols-2 grid gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Hi. I'm Jude, Take a moment to browse and discover what awaits.
            </p>
          </div>
          <div>
            I'm a passionate developer with expertise in Python, JavaScript,
            HTML, CSS, and frameworks such as React, NextJs, Flask, Django and
            Node.js. With a strong foundation in front-end and back-end
            technologies, I specialize in crafting intuitive and interactive web
            applications. I thrive on solving complex problems and delivering
            high-quality, scalable solutions. With a keen eye for detail,
            continuous learning, and adaptability to emerging technologies.
            Let's collaborate and bring your ideas to life!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
