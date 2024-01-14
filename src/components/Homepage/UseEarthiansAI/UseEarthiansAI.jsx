import Image from "next/image"
import EarthiansImage from '/public/images/useEarthiansAI.png'
import BgImg1 from '/public/images/bgimage1.png'
import BgImg2 from '/public/images/bgimage2.png'
import MoonImg from '/public/images/planet2.png'

const UseEarthiansAI = () => {
    return (
        <>
            <Image className="absolute z-[100] -mt-[100px] -ml-24" src={MoonImg} height={232} width={242} alt="eartians_image" />


            <div className="bg-[url('/images/useEarthiansAI.png')] bg-cover bg-no-repeat w-full bg-center h-[700px] z-[1] relative">
            <div className="absolute h-[700px] w-full bg-black opacity-90 -z-[1]"></div>

                <div className="max-w-[90rem] m-auto">
                    <div className="z-50 relative">
                        <div className="text-white">
                            <h2 className="text-[47px] text-center font-outfit pt-16">Use <span className="glowing-text text-[47px]">Earthians AI</span> today</h2>
                        </div>
                        <div className="relative -mt-[50px]">
                            <div className="">
                                <Image className="w-[336px] h-[550px] object-none m-auto" src={EarthiansImage} height={511} width={800} alt="eartians image" />
                            </div>
                            <div className="absolute left-[20%] top-1/4 -z-10">
                                <Image className="w-[400px] h-[275px] object-none transform rotate-bgfirst1 opacity-80" src={BgImg1} height={391} width={391} alt="eartians image" />
                            </div>
                            <div className="absolute right-[20%] top-1/4 -z-10">
                                <Image className="w-[400px] h-[275px] object-none rotate-bgfirst2 opacity-80" src={BgImg1} height={391} width={391} alt="eartians image" />
                            </div>
                            <div className="absolute left-[10%] top-[33%] -z-20">
                                <Image className="w-[184px] h-[200px] object-none rotate-bgfirst1 opacity-50" src={BgImg2} height={391} width={391} alt="eartians image" />
                            </div>
                            <div className="absolute right-[10%] top-[33%] -z-20">
                                <Image className="w-[184px] h-[200px] object-none opacity-50" src={BgImg2} height={391} width={391} alt="eartians image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseEarthiansAI