"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "หน้าหลัก" },
    { href: "/about", label: "เกี่ยวกับฉัน" },
    { href: "/history", label: "ประวัติ" },
    { href: "/skills", label: "ความสามารถ" },
    { href: "/work", label: "ผลงาน" },
    { href: "/contact", label: "ติดต่อ" },
  ];

  return (
    // Wrapper to center the navbar and keep it fixed
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <nav className="w-auto mt-4 bg-slate-900/50 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center space-x-6">
        
        {/* Logo/Brand - Hidden on mobile */}
        <div className="hidden sm:block text-xl font-bold">
          <div className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            YOK
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`transition-colors duration-300 ${pathname === link.href ? 'text-yellow-400 font-semibold' : 'text-gray-200 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile UI (Logo and Hamburger) */}
        <div className="md:hidden flex items-center justify-between w-full sm:w-auto">
           <div className="text-xl font-bold">
             <div className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
               YOK
             </div>
           </div>
           <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white z-50 relative ml-4">
               {isOpen ? <FaTimes /> : <FaBars />}
           </button>
        </div>

      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden fixed top-24 left-4 right-4 bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 p-6' : 'max-h-0 opacity-0 p-0'}`}
      >
        <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`text-xl w-full text-center py-2 rounded-md transition-colors duration-300 ${pathname === link.href ? 'text-yellow-400 font-bold bg-slate-700/50' : 'text-white hover:bg-slate-700/50'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
