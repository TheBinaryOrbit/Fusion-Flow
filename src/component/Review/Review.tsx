import { FiUser } from "react-icons/fi";


const Review = () => {
    return (
        <div className="w-full py-10">
            <div className="max-w-7xl mx-auto p-4">
                <div className="flex justify-center items-center h-fit">
                    <p className="flex justify-center items-center border-[1px] border-slate-300 px-3 rounded-lg text-xs  gap-1 mb-4 py-1 text-slate-700 font-semibold">
                    <FiUser size={12}  /><span className="text-xs -translate-y-[1px]  font-semibold">Customers</span>
                    </p>
                </div>
                <h1 className="text-5xl/tight text-center font-bold  capitalize mb-4">See what our customers <br /> are saying</h1>
                <p className="text-sm text-center text-slate-500  mb-10">Here's what some of our customers say about our platfrom.</p>
                <div className="grid grid-cols-3 grid-rows-2 gap-7 ite">
                    <div className="w-full min-h-[250px] bg-slate-200 rounded-2xl">

                    </div>
                    <canvas className="w-full h-full bg-slate-200 rounded-2xl"></canvas>
                    <canvas className="w-full h-full bg-slate-200 rounded-2xl"></canvas>
                    <canvas className="w-full h-full bg-slate-200 rounded-2xl"></canvas>
                    <canvas className="w-full h-full bg-slate-200 rounded-2xl"></canvas>
                    <canvas className="w-full h-full bg-slate-200 rounded-2xl"></canvas>
                </div>
            </div>
        </div>
    )
}


export default Review