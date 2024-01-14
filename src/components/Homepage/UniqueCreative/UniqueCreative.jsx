import { IoTriangleSharp } from "react-icons/io5";
import Image from "next/image";
import Planet2Image from '/public/images/planet2.png'


const UniqueCreative = () => {
    return (
        <div className="relative">
            <Image className="absolute -bottom-0 -left-40 z-[100]" src={Planet2Image} height={434} width={434} alt="planet2" />
            <div className="bg-[url('/images/uniqueCreative.png')] bg-no-repeat bg-center bg-cover h-[80vh] w-full flex items-center justify-center z-[1] relative">

                <div className="absolute h-[80vh] w-full bg-black opacity-65 -z-[1]"></div>

                <div className="max-w-[90rem] m-auto text-white text-center flex flex-col items-center gap-5">
                    <div className="h-32 w-32 rounded-[50%] bg-white flex items-center justify-center text-3xl">
                        <IoTriangleSharp className="text-[#7B7B7B]  rotate-[90deg]" />
                    </div>
                    <div>
                        <h2 className="font-medium text-[47px] leading-[59.4px] font-outfit">Unique. Creative</h2>
                        <p className="font-normal font-outfit tracking-[-0.38px] text-[19px] w-1/2 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi in et praesentium cum repudiandae vitae .</p>
                    </div>
                </div>
            </div>
            <div className="bg-theme h-[200px] w-full"></div>
        </div>
    )
}


export default UniqueCreative