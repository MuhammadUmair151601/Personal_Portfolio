import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0.4, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      id="about"
      className="min-h-screen bg-gray-900 text-white flex justify-center items-center px-4 md:px-30 py-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-20 gap-10 w-full max-w-6xl">
        
        <div className="flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-300">
            ABOUT <span className="text-orange-400">ME</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 w-full md:w-150 text-justify">
            I am Muhammad Umair, a passionate Full-Stack Developer specializing in the MERN stack. I build modern, scalable web applications and integrate AI-driven solutions to create intelligent, interactive user experiences. With a strong foundation in software engineering, I enjoy transforming complex problems into elegant, efficient code. My work focuses on combining the power of web development with cutting-edge AI technologies, including Agentic API integrations, to deliver smart and future-ready applications. I thrive in creative, challenging environments and am always eager to explore the latest innovations in technology.
          </p>
        </div>

    
        <div className="mt-10 md:mt-0">
          <motion.img
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full shadow-[0_0_25px_#f97316]"
            src="/Adobe Express - file.png"
            alt="About Me"
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

export default About;