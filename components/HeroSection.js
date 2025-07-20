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
		<section className="bg-transparent">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-4">
				<div className="md:w-1/2 text-center md:text-left">
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
				
				{/* --- ส่วนของรูปภาพที่แก้ไข --- */}
				<div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
					<div className="relative w-72 h-72 md:w-96 md:h-96">
						{/* กรอบไล่ระดับสีแบบเคลื่อนไหว */}
						<div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur animate-slow-spin"></div>
						{/* รูปภาพ */}
						<Image
							src="/images/avatar1.png"
							alt="Your Avatar"
							width={400}
							height={400}
							className="relative w-full h-full object-cover rounded-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
