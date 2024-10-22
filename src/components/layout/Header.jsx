import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
  return (
    <>
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        {/* Toggle button for sidebar */}
      <button onClick={toggleSidebar} className="lg:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <h1 className="text-xl">My App</h1>
    </header>
    </>
  )
}

export default Header
