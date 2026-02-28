import React from "react";

const Card = ({ name, paragraph, Demo_link, Code_link, image }) => {
  return (
    <div>
      <div className="flex flex-col justify-between items-center h-100 w-70  mt-5 rounded-2xl bg-gray-800 hover:bg-gray-700 hover:scale-105 duration-300">
        <div className="w-full h-40 object-cover">
          <img className="rounded-2xl w-full h-50 object-cover" src={image} alt="" />
        </div>
        <div className="flex justify-between items-center flex-col p-2">
          <h1 className="font-bold text-xl mt-12 mb-3">{name}</h1>
          <p className="text-justify px-3">{paragraph}</p>
        </div>
        
        <div className="flex items-center gap-7 p-5">
          <div>
          <a
            className="hover:shadow-[0_0_25px_#f97316] bg-orange-400 rounded-[5px] w-25 font-bold hover:text-black hover:scale-105 duration-300 cursor-pointer py-2 px-5"
            href={Demo_link}
            target="_blank"
          >
            Demo
          </a>
        </div>
        <div>
          <a
            className="hover:shadow-[0_0_25px_#f97316] bg-orange-400 rounded-[5px] w-25 font-bold hover:text-black hover:scale-105 duration-300 cursor-pointer py-2 px-5"
            href={Code_link}
            target="_blank"
          >
            Code
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
