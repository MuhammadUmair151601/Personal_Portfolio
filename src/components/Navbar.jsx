const Navbar = () => {
  return (
    <nav className="fixed top-0 w-310 bg-gray-700 text-white flex justify-between items-center px-10 py-5 mt-2 opacity-90 rounded-4xl z-50 ml-2">
      
    
      <h1 className="text-3xl font-bold"> 
       <span className="text-orange-400">&lt;</span>  Muhammad <span className="text-orange-400">/</span> Umair <span className="text-orange-400">&gt;</span>
      </h1>

      
      <ul className="flex gap-8 text-lg font-bold">
        <li><a href="#home" className="hover:text-orange-400 duration-300">Home</a></li>
        <li><a href="#about" className="hover:text-orange-400 duration-300">About</a></li>
        <li><a href="#skills" className="hover:text-orange-400 duration-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-orange-400 duration-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-orange-400 duration-300">Contact Me</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;
