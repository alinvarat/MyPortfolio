import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-4 flex flex-col md:flex-row items-center gap-12">
                
                {/* คอลัมน์ซ้าย: รูปภาพ */}
                <div className="md:w-1/3 flex justify-center">
                    <Image
                        src="https://placehold.co/400x400/a78bfa/ffffff?text=My+Photo"
                        alt="รูปโปรไฟล์"
                        width={400}
                        height={400}
                        className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 shadow-lg"
                    />
                </div>

                {/* คอลัมน์ขวา: ข้อความ */}
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-4 text-white">เกี่ยวกับฉัน</h2>
                    <p className="text-lg text-gray-200 leading-relaxed">
                        นักพัฒนาผู้หลงใหลในการเปลี่ยนไอเดียให้เป็นจริงผ่านการออกแบบ, ฮาร์ดแวร์, และโค้ด
                        ผมมีความเชี่ยวชาญในการสร้างสรรค์เทคโนโลยีที่จับต้องได้ ตั้งแต่หุ่นยนต์, ระบบ IoT, ไปจนถึงเว็บไซต์และแอปพลิเคชันที่สมบูรณ์แบบ
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
