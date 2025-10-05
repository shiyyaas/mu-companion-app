import Ongoing from './Ongoing'
import Completed from './Completed'
import Suggested from './Suggested'


function Summary() {
    return (
        <section className="border border-slate-700 rounded-xl p-3 m-2">
            <p className='p-1'>Summary</p>
            <Ongoing />
            <Completed />
            <Suggested />
        </section>
    );
};

export default Summary