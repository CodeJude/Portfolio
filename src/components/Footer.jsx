import { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="font-medium flex bg-[#0a192f] text-white w-full justify-center">
      <p className=" mb-5">
        Built with <span className="text-pink-600">❤️</span> by{" "}
        <button
          className="text-pink-600"
          href="https://github.com/judevector"
          onClick={() => window.open("https://github.com/judevector")}
        >
          judevector &copy; {currentYear}
        </button>
      </p>
    </footer>
  );
};

export default Footer;
