function Completed() {
    return (
        <section className="rounded-lg border border-gray-700 my-2">
            <div className="flex p-4 bg-gray-700 rounded-t-lg items-center">
                <p>Completed</p>
                <a className="ml-auto" href="#">View All</a>
            </div>
            <div className="flex p-4 items-center">
                <p>Self Introduction</p>
                <p className="ml-auto px-4 py-2 border border-gray-800 bg-gray-800 rounded-lg text-xl" href="#">1000</p>
            </div>
            <div className="flex p-4 items-center bg-gray-800">
                <p>Self Introduction</p>
                <p className="ml-auto px-4 py-2 border border-gray-900 bg-gray-900 rounded-lg text-xl" href="#">1000</p>
            </div>
            <div className="flex p-4 items-center">
                <p>Self Introduction</p>
                <p className="ml-auto px-4 py-2 border border-gray-800 bg-gray-800 rounded-lg text-xl" href="#">1000</p>
            </div>           
        </section>
    );
};

export default Completed