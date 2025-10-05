function Dashboard() {
    return (
        <section className="m-3">
            <div className="flex justify-around item-center p-10 border-2 border-gray-500 rounded-xl">
                <div className="flex flex-col gap-1 justify-center items-center">
                    <img className="h-15" src="/public/icon=tracked-tasks.png" alt="" />
                    <p className="text-5xl">500</p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <img className="h-15" src="/public/icon=completed.png" alt="" />
                    <p className="text-5xl">500</p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <img className="h-15" src="/public/icon=karma-points.png" alt="" />
                    <p className="text-5xl">500</p>
                </div>
            </div>
        </section>
    );
};

export default Dashboard