
function Navbar() {
    return (
        <nav>
            <div className="flex items-center py-3 px-5 border-b border-gray-500 mt-3 mx-3">
                <a href="#"><img className="h-12" src="/images/menu.png" alt="" /></a>
                <a className="ml-auto font-sans font-thin text-3xl" href="">mu-companion</a>
            </div>
        </nav>
    );
};

export default Navbar