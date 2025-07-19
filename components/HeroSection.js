"use client";
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import AnimatedWrapper from './AnimatedWrapper';

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
		<section className="min-h-screen flex items-center bg-gray-50 pt-20">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-4">
				<div className="md:w-1/2 text-center md:text-left">
					<AnimatedWrapper>
						<h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
							สวัสดีผมชื่อ<span className="text-purple-600">หยก</span>
						</h1>
					</AnimatedWrapper>
					<AnimatedWrapper delay={0.2}>
						<p className="mt-4 text-lg md:text-2xl text-gray-600 leading-none">
							นี้เป็นเว็บไซต์ส่วนตัวขอผม ที่แสดงผลงาน
						</p>
						<p className="mt-4 text-lg md:text-2xl text-gray-600 leading-none">
							ความสามารถและประวัติส่วนตัว
						</p>
					</AnimatedWrapper>
					
					<AnimatedWrapper delay={0.4}>
						<a
							href="#about"
							onClick={handleScroll}
							className="mt-8 inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300"
						>
							เริ่มดูประวัติของฉัน
						</a>
					</AnimatedWrapper>

					<AnimatedWrapper delay={0.6}>
						<div className="mt-8 flex justify-center md:justify-start space-x-4">
							<a
								href="https://www.facebook.com/linwrath.tofu"
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl text-gray-600 hover:text-blue-600"
							>
								<FaFacebook />
							</a>
							<a
								href="https://www.instagram.com/linwrath_tofu/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl text-gray-600 hover:text-pink-600"
							>
								<FaInstagram />
							</a>
							<a
								href="https://github.com/alinvarat" 
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl text-gray-600 hover:text-gray-900"
							>
								<FaGithub />
							</a>
						</div>
					</AnimatedWrapper>
				</div>
				<div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <AnimatedWrapper delay={0.3}>
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-yellow-300 rounded-full"></div>
                            <Image
                                src="/your-avatar.png"
                                alt="Your Avatar"
                                width={400}
                                height={400}
                                className="relative object-cover rounded-full"
                            />
                        </div>
                    </AnimatedWrapper>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
