const Button = () => {
    return (
        <div className="group relative overflow-hidden rounded-2xl">
            <button className="border-[1px] px-5 border-white rounded-2xl shadow-button text-white tracking-wide py-2 font-bold z-50 overflow-hidden relative  transition-all duration-300">
                Get Started
            </button>
            <div className="absolute top-0 left-0 w-full h-full bg-btn rounded-2xl z-40 group-hover:scale-110 group-hover:translate-x-[100%] -translate-x-[100%] duration-1000 transition-all"></div>
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-200 to-yellow-500 opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div> */}
        </div>

    )
}

export default Button