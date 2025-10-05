function Category() {
    return (
        <nav className="">
            <div className="flex justify-center ">
                <p className="pl-5 p-3 border border-slate-700 rounded-l-3xl hover:bg-gray-800">All Tasks</p>
                <p className="p-3 border border-slate-700 hover:bg-gray-800">Ongoing</p>
                <p className="p-3 border border-slate-700 hover:bg-gray-800">Starred</p>
                <p className="pr-5 p-3 border border-slate-700 rounded-r-3xl hover:bg-gray-800">Completed</p>
            </div>
        </nav>
    );
};

export default Category