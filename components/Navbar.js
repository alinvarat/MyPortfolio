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
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" className="hover:text-purple-600">พอร์ตโฟลิโอของฉัน</Link> 
        </div>
        
        {/* เมนูสำหรับจอใหญ่ */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={pathname === link.href ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ปุ่ม Hamburger สำหรับจอมือถือ */}
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-800 z-50 relative">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      </div>

      {/* เมนูที่แสดงผลเมื่อกดปุ่มบนมือถือ */}
      <div 
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-2xl text-gray-800 hover:text-purple-600" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
