const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-blue-950 text-white flex justify-between items-center px-10 py-5 z-50">
      
    
      <h1 className="text-3xl font-bold">Muhammad Umair</h1>

      
      <ul className="flex gap-8 text-lg">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact Me</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;
