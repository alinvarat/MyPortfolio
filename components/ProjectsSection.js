import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl }) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
        <Image src={imageUrl} alt={title} width={500} height={300} className="w-full h-56 object-cover" />
        <div className="p-6 flex-grow">
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-200">{description}</p>
        </div>
    </div>
);

const ProjectsSection = () => {
    return (
        // ลบ layout classes ที่ซ้ำซ้อนออก (เช่น min-h-screen, py-20)
        <section className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-white">ผลงาน</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard 
                    title="หุ่นยนต์สำรวจอัตโนมัติ" 
                    description="หุ่นยนต์ที่สามารถสร้างแผนที่และเคลื่อนที่ในพื้นที่ที่ไม่รู้จักได้ด้วยตัวเอง"
                    imageUrl="https://placehold.co/600x400/9ca3af/ffffff?text=Project+1"
                />
                <ProjectCard 
                    title="ระบบฟาร์มอัจฉริยะ IoT" 
                    description="ระบบควบคุมการรดน้ำและวัดความชื้นในดินผ่านเว็บไซต์และแอปพลิเคชัน"
                    imageUrl="https://placehold.co/600x400/a78bfa/ffffff?text=Project+2"
                />
                <ProjectCard 
                    title="เครื่องพิมพ์ 3 มิติ DIY" 
                    description="ออกแบบและสร้างเครื่องพิมพ์ 3 มิติจากชิ้นส่วนที่หาได้ทั่วไป"
                    imageUrl="https://placehold.co/600x400/facc15/ffffff?text=Project+3"
                />
            </div>
        </section>
    );
};
export default ProjectsSection;
