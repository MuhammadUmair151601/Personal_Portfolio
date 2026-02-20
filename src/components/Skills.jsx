import { Brush, Lightbulb, CodeXml } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className="h-screen bg-gray-900 text-white flex pt-40">
      <div className="absolute left-140 top-315 text-4xl font-bold text-gray-300">
        My <span className="text-orange-400">Skills</span>
      </div>
      <div className="flex gap-4 w-140 h-100 flex-wrap border-r border-[#f97316] ml-30 ">
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl h-50 w-50 flex flex-col justify-between items-center p-4 text-sm">
          <Brush size={40} color="orange" strokeWidth={3} />
          <h1 className="font-bold text-gray-300 text-xl">Design oriented</h1>
          <p className="leading-tight text-gray-300 text-justify">
            Beautiful design and user experience are at the heart of everything
            i create.
          </p>
        </div>
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl h-50 w-50 flex flex-col justify-between items-center p-4 text-sm">
          <Lightbulb size={40} color="orange" strokeWidth={3} />
          <h1 className="font-bold text-gray-300 text-xl">Design oriented</h1>
          <p className="leading-tight text-gray-300 text-justify">
            Beautiful design and user experience are at the heart of everything
            i create.
          </p>
        </div>
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl h-50 w-50 flex flex-col justify-between items-center p-4 text-sm">
          <CodeXml color="orange" strokeWidth={3} size={40} />
          <h1 className="font-bold text-gray-300 text-xl">Design oriented</h1>
          <p className="leading-tight text-gray-300 text-justify">
            Beautiful design and user experience are at the heart of everything
            i create.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap h-100 gap-4 ml-20 w-140">
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl h-50 w-50 flex flex-col gap-4 justify-between items-center p-4 text-sm">
          <FaReact className="text-cyan-400" size={50} strokeWidth={5} />{" "}
          <h1 className="text-lg font-bold text-gray-300">FrontEnd Tech</h1>
          <p className="text-justify text-gray-300">
            Using react framework for building modern and responsive web
            designs.
          </p>
        </div>
        <div>
          <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl h-50 w-50 flex flex-col gap-4 justify-between items-center p-4 text-sm ">
            <FaServer className="text-blue-600" size={40} />
            <h1 className="text-lg font-bold text-gray-300">BackEnd Tech</h1>
            <p className="text-justify text-gray-300">
              Using react framework for building modern and responsive web
              designs.
            </p>
          </div>
          <div></div>
        </div>
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl h-50 w-50 flex flex-col gap-4 justify-between items-center p-4 text-sm">
          <SiMongodb className="text-green-500" size={40} />
          <h1 className="text-lg font-bold text-gray-300">DataBase Tech</h1>
          <p className="text-justify text-gray-300">
            Using react framework for building modern and responsive web
            designs.
          </p>
        </div>
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl h-50 w-50 flex flex-col gap-4 justify-between items-center p-4 text-sm">
          <FaTools className="text-purple-500" size={40} />
          <h1 className="text-lg font-bold text-gray-300">Tools</h1>
          <p className="text-justify text-gray-300">
            Using react framework for building modern and responsive web
            designs.
          </p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Skills;
