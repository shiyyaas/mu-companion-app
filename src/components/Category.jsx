function Category() {
    return (
        <section className="">
            <div className="flex justify-center mx-4">
                <p className="flex-1 text-center pl-5 p-3 border border-slate-700 rounded-l-3xl hover:bg-gray-800">All Tasks</p>
                <p className="flex-1 text-center p-3 border border-slate-700 hover:bg-gray-800">Ongoing</p>
                <p className="flex-1 text-center p-3 border border-slate-700 hover:bg-gray-800">Starred</p>
                <p className="flex-1 text-center pr-5 p-3 border border-slate-700 rounded-r-3xl hover:bg-gray-800">Completed</p>
            </div>
        </section>
    );
};

export default Category