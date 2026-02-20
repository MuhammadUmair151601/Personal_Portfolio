import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gray-900 text-white flex justify-center items-center pt-20 "
    >
      <div className="flex justify-between gap-30">
        <div className="mt-20">
          <h1 className="text-2xl font-bold leading-normal text-gray-300">
            Hi, i am Muhammad Umair a Software Engineer. <br /> Full-Stack MERN
            Developer <br />
            Crafting AI-Powered Applications.
          </h1>
           <h2 className="text-3xl font-semibold mt-5 text-orange-400">
            <Typewriter
              words={['MERN Stack Developer', 'AI-Powered Engineer', 'Agentic Web Integrator']}
              loop={0} 
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <button
            className="bg-orange-400 text-gray-800 font-bold text-lg  rounded-3xl px-4 py-2 mt-10 cursor-pointer transition-all duration-300 
            hover:scale-105 hover:text-white hover:shadow-[0_0_25px_#f97316]"
          >
            Download Resume
          </button>
        </div>
        <div>
          <motion.img
            className="w-80 h-80 object-cover rounded-[50%] shadow-[0_0_25px_#f97316]"
            src="/Muhammad Umair.png"
            alt=""
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
