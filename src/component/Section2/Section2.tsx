import Image from "next/image"
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.jpg'
const Section2 = () => {
    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto py-10 p-4">
                <div className="">
                    <h1 className="text-6xl leading-snug font-bold tracking-wide">Make it real with Fusion Flow</h1>
                    <p className="max-w-5xl mt-2 leading-snug ml-1" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, sit a. Autem, sint quibusdam natus iusto, expedita magnam corporis labore quod ipsa facere nulla neque! Eveniet laudantium quis odit aliquid.</p>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 mt-10 gap-5">
                    <div className="bg-slate-200 rounded-3xl col-start-1 col-end-3 w-full h-full overflow-hidden relative group">
                        <Image src={img1} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 duration-300" alt="image" />
                        <div className=" absolute bottom-10 left-4 text-white">
                            <h2 className="text-2xl font-bold mb-1 px-5">The best talent</h2>
                            <p className="text-md px-5">Discover reliable professionals by exploring their portfolios and immersing yourself in the feedback shared on their profiles.</p>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-3xl col-start-3 col-end-4 w-full h-full overflow-hidden relative group" >
                        <Image src={img2} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 duration-300" alt="image" />
                        <div className=" absolute bottom-10 left-4 text-white ">
                            <h2 className="text-2xl font-bold mb-1 px-5 ">Quality work</h2>
                            <p className="text-md px-5">With Freelancer's talent pool of over 60 million professionals at your fingertips, you'll find quality talent to get what you need done.</p>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-3xl col-start-1 col-end-2 w-full h-full overflow-hidden relative group" >
                        <Image src={img4} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 duration-300" alt="image" />
                        <div className=" absolute bottom-10 left-4 text-white">
                            <h2 className="text-2xl font-bold mb-1 px-5">Be in control</h2>
                            <p className="text-md px-5">Stay in the loop while on the move. Chat with your freelancers and get real time updates with our mobile app. Anytime, anywhere.</p>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-3xl col-start-2 col-end-4 w-full h-full overflow-hidden relative group" >
                        <Image src={img3} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 duration-300" alt="image" />
                        <div className=" absolute bottom-10 left-4 text-white">
                            <h2 className="text-2xl font-bold mb-1 px-5">The Fast bids</h2>
                            <p className="text-md px-5">Get quick, no-obligation quotes from skilled freelancers. 80% of jobs receive bids within 60 seconds. Your idea is just moments from reality.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Section2