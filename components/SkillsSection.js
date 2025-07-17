const SkillCard = ({ title, skills }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
            {skills.map(skill => <li key={skill} className="text-gray-700">{skill}</li>)}
        </ul>
    </div>
);

const SkillsSection = () => {
    const hardwareSkills = ["Robotics", "IoT Systems", "3D Design & Printing", "PCB Design", "Electronics & Soldering"];
    const softwareSkills = ["Web Development (React, Next.js)", "Application Development", "AI / Machine Learning", "Python, JavaScript"];

    return (
        <section className="min-h-screen bg-white flex items-center justify-center">
            <div className="container mx-auto p-4 text-center">
                <h2 className="text-4xl font-bold mb-12">ความสามารถ</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <SkillCard title="🤖 Hardware & Robotics" skills={hardwareSkills} />
                    <SkillCard title="💻 Software & Integration" skills={softwareSkills} />
                </div>
            </div>
        </section>
    );
};
export default SkillsSection;
