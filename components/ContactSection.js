const ContactSection = () => {
    return (
        <section className="min-h-screen bg-white flex items-center justify-center">
            <div className="container mx-auto p-4 text-center max-w-2xl">
                <h2 className="text-4xl font-bold mb-8">ติดต่อ</h2>
                <p className="text-lg text-gray-700 mb-8">
                    สนใจร่วมงานหรือมีคำถามเพิ่มเติม สามารถติดต่อผมได้ผ่านช่องทางด้านล่าง
                </p>
                <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
                    <p className="text-2xl font-semibold text-purple-600">alinvarat@gmail.com</p>
                    <p className="mt-2 text-gray-600">หรือผ่าน Social Media ที่แสดงในหน้าแรก</p>
                </div>
            </div>
        </section>
    );
};
export default ContactSection;
