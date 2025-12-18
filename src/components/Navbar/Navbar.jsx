import React, { useState } from "react";
// import {Fimenu,FiX} from 'react-icons/fi'
// import {Fagithub,Falinkedin} from 'react-icons/fa'

const Navbar = () => {

  const [Activesection, setActivesection] = useState(false)

  const menuItems = [
    {id: "about" , label:"about"},
    {id: "skill" , label:"skill"},
    {id: "Experience" , label:"Experience"},
    {id: "work" , label:"work"},
    {id: "education" , label:"education"}
  ]

  return (
    <nav className="">
      <div className="text-white py-5 flex justify-between items-center">
        <div className="">
             <span className="text-white text-2xl font-bold cursor-pointer">{"<"}</span>
             <span className="text-white text-2xl font-bold cursor-pointer">Muhammad</span>
             <span className="text-white text-2xl font-bold cursor-pointer">/</span>
             <span className="text-white text-2xl font-bold cursor-pointer">Umair</span>
             <span className="text-white text-2xl font-bold cursor-pointer">{">"}</span>
        </div>
        
         <ul className="text-white md:flex space-x-8 font-bold">
        {menuItems.map((item)=> (
          <li key={item.id} >
            <button className="cursor-pointer hover:text-gray-400">
              {item.label}
              </button>
          </li>
        ))}
        <li >

        </li>
      </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
