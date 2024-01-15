"use client"
import BikerImage from '/public/images/biker1.png'
import MountainImage from '/public/images/mountain.png'
import HomeImage from '/public/images/house.png'
import WhiteMoonImage from '/public/images/whitemoon.png'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import Image from 'next/image'
import { useState } from 'react'

const NewHorizon = () => {
    const images = [MountainImage, BikerImage, HomeImage];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    return (
        <div className='relative overflow-x-clip'>
            <Image className='absolute -bottom-80 -right-44 object-none' src={WhiteMoonImage} height={570} width={570} alt='whitemoon' />


            <div className="bg-[url('/images/newHorizon.png')] bg-no-repeat bg-cover bg-center relative w-full z-[1]">
                <div className='absolute h-full w-full z-[-1] bg-black opacity-70'></div>
                <div className='py-20 max-w-[90rem] m-auto'>
                    <div className="text-white text-center font-outfit">
                        <h2 className="text-[47px]">Use New Creative Horizons with<br />Fine-tune Models</h2>
                        <h3 className="glowing-text text-[35px] mt-10">Earthians Diffusion XL</h3>
                    </div>
                    {/* slider  */}
                    <div className='flex justify-around items-center py-14'>
                        <div onClick={handleLeftClick} className='cursor-pointer'>
                            <Image
                                className='rounded-[50%] border-8 border-white transition-opacity duration-500 ease-in-out hover:opacity-75'
                                src={images[(currentIndex - 1 + images.length) % images.length]}
                                height={200}
                                width={200}
                                alt="mountain"
                            />
                        </div>
                        <div>
                            <Image
                                className='rounded-[50%] border-8 border-white transition-opacity duration-500 ease-in-out hover:opacity-75'
                                src={images[(currentIndex + 1) % images.length]}
                                height={400}
                                width={400}
                                alt="mountain"
                            />
                        </div>
                        <div onClick={handleRightClick} className='cursor-pointer'>
                            <Image
                                className='rounded-[50%] border-8 border-white transition-opacity duration-500 ease-in-out hover:opacity-75'
                                src={images[currentIndex]}
                                height={200}
                                width={200}
                                alt="mountain"
                            />
                        </div>
                    </div>
                    {/* slider  */}
                    <p className='text-center text-white text-[19px] w-1/2 m-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, sint? Quaerat, dolorem. Repellendus molestias recusandae perspiciatis.</p>
                </div>

                <div className='flex items-center justify-center text-white pb-10'>
                    <span className='mx-2 text-[25px] cursor-pointer' onClick={handleLeftClick}> <FaAngleLeft /> </span>
                    <span className='mx-2 text-[25px] cursor-pointer' onClick={handleRightClick}> <FaAngleRight /> </span>
                </div>
            </div>
        </div>
    )
}


export default NewHorizon