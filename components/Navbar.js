import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* ส่วนโลโก้ */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">พอร์ตโฟลิโอของฉัน</Link> 
        </div>
        
        {/* ส่วนเมนู */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-purple-600 font-semibold">หน้าหลัก</Link>
          <Link href="#about" className="hover:text-purple-600">ประวัติ</Link>
          <Link href="#skills" className="hover:text-purple-600">ความสามารถ</Link>
          <Link href="#work" className="hover:text-purple-600">งานอดิเรก</Link>
          <Link href="#contact" className="hover:text-purple-600">ติดต่อ</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;