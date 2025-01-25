import { canvas } from 'framer-motion/client';
import { TextGenerateEffect } from '../TextGenerator/Textgenerator'
import WireEffect from "../Wires/Wireeffect";
import img from '../../assets/back.png'
import Button from '../UI/Button/Button';
function Hero() {
    const arr = new Array(50).fill(1)
    return (
        <div className="w-full bg-black bg-startexture">
            <div className="w-7xl mx-auto flex h-fit justify-center items-center flex-col pt-8 z-50">
                <TextGenerateEffect duration={1} filter={false} words={"With insomnia Everything is far away Everything"} textlen="6xl" />
                <p className="text-gray-300 max-w-2xl text-center leading-snug mt-4 z-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi voluptates beatae cupiditate ratione pariatur tempora delectus nobis et cumque nihil</p>
                <div className="mt-10 flex items-center gap-10 z-50">
                    <button className="border-[1px] px-5 border-white rounded-2xl shadow-button  text-black   tracking-wide py-2 bg-white font-bold z-50">Sing in</button>
                    <Button />
                </div>
                <div className=" w-full overflow-x-hidden z-50">
                    <WireEffect />
                </div>
            </div>
        </div>
    );
}

export default Hero

