const Banner = () => {
    return (
        <div className="w-full py-10">
            <div className="relative max-w-7xl mx-auto p-4  group rounded-2xl h-[400px] bg-black flex flex-col justify-center items-center overflow-hidden">

                <div className="absolute inset-0 bg-startexture group-hover:scale-110 bg-black rounded-2xl duration-700">
                    <div className="bg-texture opacity-10 h-full w-full"></div>
                </div>
                <h1 className="text-white text-5xl/tight font-bold text-center capitalize mb-4 z-50">A better Way To work <br /> today ,together</h1>
                <p className="text-slate-200 text-center max-w-3xl text-sm z-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vitae, perferendis libero aspernatur dignissimos, velit molestias aperiam fuga laborum aliquid non! Quibusdam</p>
                <div>
                    <div className="mt-10 flex items-center gap-5 z-50">
                        <button className="px-5  rounded-2xl shadow-button  text-black   tracking-wide py-2 bg-white font-bold z-50 text-sm"> Sing in</button>
                        <button className="px-5  rounded-2xl shadow-button  text-white   tracking-wide py-2 bg-gray-500 backdrop-blur-lg font-bold z-50 text-sm">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner 