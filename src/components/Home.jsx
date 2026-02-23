import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0.4, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1] // smooth cinematic ease
      }}
      id="home"
      className="min-h-screen bg-gray-900 text-white flex justify-center items-center pt-60 md:pt-20 px-4"
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-30 gap-10 w-full max-w-6xl">
        {/* Text Section */}
        <div className="mt-10 md:mt-20 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-normal text-gray-300">
            Hi, I am Muhammad Umair, a Software Engineer. <br /> Full-Stack MERN
            Developer <br />
            Crafting AI-Powered Applications.
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-5 text-orange-400">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "AI-Powered Engineer",
                "Agentic Web Integrator",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <div className="flex justify-center md:justify-start">
            <a
              className="bg-orange-400 text-gray-800 font-bold text-lg rounded-3xl px-4 py-2 mt-10 cursor-pointer transition-all duration-300 
              hover:scale-105 hover:text-white hover:shadow-[0_0_25px_#f97316]"
              href="/M.umair.pdf"
              download="M.umair.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0">
          <motion.img
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full shadow-[0_0_25px_#f97316]"
            src="/Muhammad Umair.png"
            alt="Muhammad Umair"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;