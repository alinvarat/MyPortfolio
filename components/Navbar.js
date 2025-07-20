"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" className="hover:text-purple-600">พอร์ตโฟลิโอของฉัน</Link> 
        </div>
        
        <div className="hidden md:flex space-x-8">
          {}
          <Link href="/" className={pathname === '/' ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}>
            หน้าหลัก
          </Link>
          <Link href="/about" className={pathname === '/about' ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}>
            เกี่ยวกับฉัน
          </Link>
          <Link href="/history" className={pathname === '/history' ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}>
            ประวัติ
          </Link>
          <Link href="/skills" className={pathname === '/skills' ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}>
            ความสามารถ
          </Link>
          <Link href="/work" className={pathname === '/work' ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}>
            ผลงาน
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}>
            ติดต่อ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
