import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* คุณสามารถเพิ่ม Section อื่นๆ ต่อจากตรงนี้ได้ */}
        {/* <section id="about">...</section> */}
        {/* <section id="skills">...</section> */}
      </main>
    </>
  );
}