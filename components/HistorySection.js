const HistorySection = () => {
    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="container mx-auto p-4 text-center">
                <h2 className="text-4xl font-bold mb-8">ประวัติ</h2>
                <div className="mt-12 text-left max-w-2xl mx-auto">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold">มหาวิทยาลัย ABC</h3>
                        <p className="text-purple-600">2020 - 2024</p>
                        <p className="text-gray-600">ปริญญาตรี วิศวกรรมคอมพิวเตอร์</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">ฝึกงานที่ XYZ Tech</h3>
                        <p className="text-purple-600">มิถุนายน - สิงหาคม 2023</p>
                        <p className="text-gray-600">ตำแหน่ง: ผู้ช่วยนักพัฒนา IoT</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HistorySection;
