import { Brush, Lightbulb, CodeXml } from "lucide-react";
import { FaReact, FaServer, FaTools } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20 px-4 md:px-20"
    >
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-12">
        MY <span className="text-orange-400">SKILLS</span>
      </h1>

      {/* Skill Cards Container */}
      <div className="flex flex-col sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Design Oriented */}
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl p-6 flex flex-col justify-between items-center text-center">
          <Brush size={40} color="orange" strokeWidth={3} />
          <h1 className="font-bold text-gray-300 text-xl mt-2">
            Design oriented
          </h1>
          <p className="text-gray-300 mt-2 text-sm">
            Beautiful design and user experience are at the heart of everything
            I create.
          </p>
        </div>

        {/* New Ideas */}
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl p-6 flex flex-col justify-between items-center text-center">
          <Lightbulb size={40} color="orange" strokeWidth={3} />
          <h1 className="font-bold text-gray-300 text-xl mt-2">New Ideas</h1>
          <p className="text-gray-300 mt-2 text-sm">
            Always focused to create new ideas into responsive web designs.
          </p>
        </div>

        {/* Clean Code */}
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl p-6 flex flex-col justify-between items-center text-center">
          <CodeXml color="orange" strokeWidth={3} size={40} />
          <h1 className="font-bold text-gray-300 text-xl mt-2">Clean Code</h1>
          <p className="text-gray-300 mt-2 text-sm">
            Prefer clean and understandable coding so that it can improve
            teamwork.
          </p>
        </div>
        <div className="flex flex-col  justify-between items-center p-10 rounded-2xl">
          <h1 className="text-2xl mb-5 font-bold">TECH STACK</h1>
          <div className="flex gap-3">
            <SiMongodb className="text-green-500" size={40} />
            <SiExpress size={40} className="text-gray-100" />
            <FaReact className="text-cyan-400" size={40} />
            <FaNodeJs size={40} className="text-green-500" />
          </div>
        </div>

        {/* FrontEnd Tech */}
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl p-6 flex flex-col justify-between items-center text-center">
            <FaReact className="text-cyan-400" size={50} />
            <h1 className="text-lg font-bold text-gray-300 mt-2">
              FrontEnd Tech
            </h1>
            <p className="text-gray-300 mt-2 text-sm">
              Using React framework for building modern and responsive web
              designs.
            </p>
          </div>

          {/* BackEnd Tech */}
          <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl p-6 flex flex-col justify-between items-center text-center">
            <FaServer className="text-blue-600" size={50} />
            <h1 className="text-lg font-bold text-gray-300 mt-2">
              BackEnd Tech
            </h1>
            <p className="text-gray-300 mt-2 text-sm">
              Using Node.js and Express to build scalable server-side
              applications.
            </p>
          </div>

          {/* Database Tech */}
          <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl p-6 flex flex-col justify-between items-center text-center">
            <SiMongodb className="text-green-500" size={40} />
            <h1 className="text-lg font-bold text-gray-300 mt-2">
              Database Tech
            </h1>
            <p className="text-gray-300 mt-2 text-sm">
              Using MongoDB to manage data efficiently and reliably.
            </p>
          </div>

          {/* Tools */}
          <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl p-6 flex flex-col justify-between items-center text-center">
            <FaTools className="text-purple-500" size={40} />
            <h1 className="text-lg font-bold text-gray-300 mt-2">Tools</h1>
            <p className="text-gray-300 mt-2 text-sm">
              Using modern tools to optimize development workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
