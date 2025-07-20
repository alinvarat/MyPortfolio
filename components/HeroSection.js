"use client";
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
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
		// แก้ไข: เปลี่ยนโครงสร้างทั้งหมดเพื่อสร้าง Layout แบบซ้อนทับ
		<section className="relative bg-transparent min-h-screen flex items-center overflow-hidden">
			
			{/* Layer 1: รูปภาพพื้นหลัง (แสดงด้านขวา) */}
			{/* แก้ไข: ปรับความกว้างเป็น md:w-2/5 เพื่อให้รูปภาพเล็กลง */}
			<div className="absolute bottom-0 right-0 w-full md:w-2/5 h-full z-0">
				<Image
					src="/images/avatar1.png"
					alt="Your Avatar Background"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					// ทำให้รูปภาพจางลงบนมือถือ เพื่อให้ข้อความอ่านง่าย
					className="opacity-30 md:opacity-100"
				/>
			</div>

			{/* Layer 2: เนื้อหา (แสดงด้านซ้ายและอยู่ด้านบน) */}
			<div className="relative z-10 container mx-auto flex items-center h-full min-h-screen">
				<div className="md:w-1/2 text-center md:text-left p-4">
					<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
						สวัสดีผมชื่อ<span className="text-yellow-400">หยก</span>
					</h1>
					<p className="mt-4 text-lg md:text-2xl text-gray-200 leading-none">
						นี้เป็นเว็บไซต์ส่วนตัวขอผม ที่แสดงผลงาน
					</p>
					<p className="mt-4 text-lg md:text-2xl text-gray-200 leading-none">
						ความสามารถและประวัติส่วนตัว
					</p>
					
					<a
						href="#about"
						onClick={handleScroll}
						className="mt-8 inline-block bg-white text-[#3d03c3] font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300"
					>
						เริ่มดูประวัติของฉัน
					</a>

					<div className="mt-8 flex justify-center md:justify-start space-x-4">
						<a
							href="https://www.facebook.com/linwrath.tofu"
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl text-gray-300 hover:text-white"
						>
							<FaFacebook />
						</a>
						<a
							href="https://www.instagram.com/linwrath_tofu/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl text-gray-300 hover:text-white"
						>
							<FaInstagram />
						</a>
						<a
							href="https://github.com/alinvarat" 
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl text-gray-300 hover:text-white"
						>
							<FaGithub />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
