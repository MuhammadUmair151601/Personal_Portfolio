import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0.4, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1]   // smooth cinematic ease
      }}
      id="about"
      className="h-screen bg-gray-900 text-white flex justify-center items-center px-30"
    >
      <div className="flex justify-between items-center gap-20">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl font-bold text-gray-300">ABOUT <span className="text-orange-400">ME</span></h1>
          <p className="w-150 text-lg text-justify text-gray-400">I am Muhammad Umair, a passionate Full-Stack Developer specializing in the MERN stack. I build modern, scalable web applications and integrate AI-driven solutions to create intelligent, interactive user experiences. With a strong foundation in software engineering, I enjoy transforming complex problems into elegant, efficient code. My work focuses on combining the power of web development with cutting-edge AI technologies, including Agentic API integrations, to deliver smart and future-ready applications. I thrive in creative, challenging environments and am always eager to explore the latest innovations in technology.</p>
        </div>
        <div>
          <motion.img className="h-80 w-80 object-cover rounded-[50%] shadow-[0_0_25px_#f97316]" src="/Adobe Express - file.png" alt=""
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
