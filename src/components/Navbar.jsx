import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Navbar = ({darkMode,toggleDarkMode}) => {
  const [ActiveSection, setActiveSection] = useState("home")
  const [MenuOpen, setMenuOpen] = useState(false)
  const navItems = [
    {name: 'About', link : '#about'},
    {name: 'Skills', link : '#skills'},
    {name: 'Home', link : '#home'},
    {name: 'Projects', link : '#projects'},
    {name: 'Contact', link : '#contact'}
  ]
  const lightColors = {
    navBg: 'bg-linear-to-br from-orange-200 to-white',
    textPrimary : 'text-gray-900',
    textSecondary : 'text-gray-900',
    textHover : 'text-orange-500',
    textActive: 'text-orange-600',
    indicator : 'from-orange-500 to-amber-500',
    button : 'from-orange-500 to-amber-500'
  }
  const darkColors = {
    navBg: 'bg-linear-to-br from-gray-700 to-black',
    textPrimary : 'text-white',
    textSecondary : 'text-gray-300',
    textHover : 'text-orange-400',
    textActive: 'text-orange-400',
    indicator : 'from-orange-500 to-amber-500',
    button : 'from-orange-500 to-amber-500'
  }
  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (itemName) =>{
    setActiveSection(itemName.toLowerCase);
    setIsMenuOpen(false);
  }
  return (
    <div className='flex justify-center w-full z-50 mt-4'>
    <motion.nav>
    
    </motion.nav>
    </div>
  )
}

export default Navbar