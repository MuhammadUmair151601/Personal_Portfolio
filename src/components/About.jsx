const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-blue-950 text-white flex justify-center items-center"
    >
      <div className="flex justify-between gap-20">
        <div>
          <h1 className="text-4xl">About Me</h1>
          <p>I am Muhammad Umair, a passionate Full-Stack Developer specializing in the MERN stack. I build modern, scalable web applications and integrate AI-driven solutions to create intelligent, interactive user experiences. With a strong foundation in software engineering, I enjoy transforming complex problems into elegant, efficient code. My work focuses on combining the power of web development with cutting-edge AI technologies, including Agentic API integrations, to deliver smart and future-ready applications. I thrive in creative, challenging environments and am always eager to explore the latest innovations in technology.</p>
        </div>
        <div>
          <img className="h-100 w-100" src="/About me.png" alt="" />
        </div>
        
      </div>

      
    </section>
  );
};

export default About;
