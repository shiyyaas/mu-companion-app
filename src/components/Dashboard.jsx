function Dashboard() {
    return (
        <section className="m-3">
            <div className="flex justify-around item-center p-10 border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
                <div className="flex flex-col gap-1 justify-center items-center">
                    <img className="h-13" src="/images/tracked-tasks.png" alt="" />
                    <p className="text-5xl">500</p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <img className="h-13" src="/images/completed.png" alt="" />
                    <p className="text-5xl">500</p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <img className="h-13" src="/images/karma-points.png" alt="" />
                    <p className="text-5xl">500</p>
                </div>
            </div>
        </section>
    );
};

export default Dashboard