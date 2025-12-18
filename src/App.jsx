import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Navbar from './components/Navbar/Navbar'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='bg-blue-950 min-h-screen'>
      <div></div>
      <div>
        <Navbar/>
      </div>
    </div>
  )
}

export default App