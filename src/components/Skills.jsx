import { Brush, Lightbulb, CodeXml, Code, Bold, BoldIcon } from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen bg-gray-900 text-white flex justify-center items-center"
    >
      
      <div className="flex gap-5 w-120 flex-wrap ">
      
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl h-50 w-50 flex flex-col justify-between items-center p-4 text-sm">
          <Brush size={40} color="orange" strokeWidth={3} />
          <h1 className="font-bold text-gray-300 text-xl">Design oriented</h1>
          <p className="leading-tight text-gray-300">
            Beautiful design and user experience are at the heart of everything
            i create.
          </p>
        </div>
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl h-50 w-50 flex flex-col justify-between items-center p-4 text-sm">
          <Lightbulb size={40} color="orange" strokeWidth={3} />
          <h1 className="font-bold text-gray-300 text-xl">Design oriented</h1>
          <p className="leading-tight text-gray-300">
            Beautiful design and user experience are at the heart of everything
            i create.
          </p>
        </div>
        <div className="hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-800 rounded-2xl h-50 w-50 flex flex-col justify-between items-center p-4 text-sm">
          <CodeXml color="orange" strokeWidth={3} size={40} />
          <h1 className="font-bold text-gray-300 text-xl">Design oriented</h1>
          <p className="leading-tight text-gray-300">
            Beautiful design and user experience are at the heart of everything
            i create.
          </p>
        </div>
      </div>
      <div>
       
      </div>
    </section>
  );
};

export default Skills;
