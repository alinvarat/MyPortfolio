"use client";
import Link from 'next/link';

const Navbar = () => {
    const handleScroll = (e) => {
		e.preventDefault();
		const href = e.currentTarget.href;
		const targetId = href.replace(/.*#/, "");
		const elem = document.getElementById(targetId);
		elem?.scrollIntoView({
			behavior: "smooth",
		});
	};

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800">
          <a href="/" className="hover:text-purple-600">พอร์ตโฟลิโอของฉัน</a> 
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" onClick={handleScroll} className="text-purple-600 font-semibold">หน้าหลัก</a>
          <a href="#about" onClick={handleScroll} className="hover:text-purple-600">เกี่ยวกับฉัน</a>
          <a href="#history" onClick={handleScroll} className="hover:text-purple-600">ประวัติ</a>
          <a href="#skills" onClick={handleScroll} className="hover:text-purple-600">ความสามารถ</a>
          <a href="#work" onClick={handleScroll} className="hover:text-purple-600">ผลงาน</a>
          <a href="#contact" onClick={handleScroll} className="hover:text-purple-600">ติดต่อ</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
