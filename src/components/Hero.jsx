import { HiArrowNarrowRight } from "react-icons/hi";
// bg-[#537FE7]
const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-700">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jude Ndubuisi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a passionate Software developer.
        </h2>
        <p className="py-4 max-w-[700px] text-[#8892b0] ">
          I'm a Software developer and Technical Writer with a strong foundation
          in both front-end and back-end technologies. With expertise in
          languages like JavaScript, Python HTML, CSS, and frameworks such as
          React, Nextjs, Flask and Node.js, I love building intuitive and
          interactive web applications.
        </p>
        <div>
          <a
            href="https://github.com/CodeJude"
            target="_blank"
            rel="noreferrer"
          >
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
              View Work
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
