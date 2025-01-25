
const Section2 = () => {
    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto py-10 p-4">
                <div className="">
                    <h1 className="text-6xl leading-snug font-bold tracking-wide">Make it real with Fusion Flow</h1>
                    <p className="max-w-5xl mt-2 leading-snug ml-1" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, sit a. Autem, sint quibusdam natus iusto, expedita magnam corporis labore quod ipsa facere nulla neque! Eveniet laudantium quis odit aliquid.</p>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 mt-10 gap-5">
                    <canvas className="bg-slate-200 rounded-3xl col-start-1 col-end-3 w-full h-full animate-pulse"></canvas>
                    <canvas className="bg-slate-200 rounded-3xl col-start-3 col-end-4 w-full h-full animate-pulse" ></canvas>
                    <canvas className="bg-slate-200 rounded-3xl col-start-1 col-end-2 w-full h-full animate-pulse" ></canvas>
                    <canvas className="bg-slate-200 rounded-3xl col-start-2 col-end-4 w-full h-full animate-pulse" ></canvas>                    
                </div>
            </div>
        </div>
    )
}


export default Section2