import { IoIosClose } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { useGenerationState } from "@/appstate/image-gen-state";
import { FaEye } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosEyeOff } from "react-icons/io";

const PreviousGen = ({ closeTab }) => {
  const { images, setSelectImage, selectedImage } = useGenerationState();
  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      <div className="flex items-center justify-between py-4 px-4 border-y border-white/10">
        <div className="font-semibold text-normal flex items-center gap-3">
          <div className="p-2 rounded-md bg-blue-700 text-white">
            <FaLayerGroup />
          </div>
          <p>Previous Generation</p>
        </div>
        <button
          onClick={closeTab}
          className="text-slate-300  active:text-slate-400"
        >
          <IoIosClose size={35} />
        </button>
      </div>

      <div className="my-3">
        <div className="flex flex-col ">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="flex justify-between px-4 h-[32px] w-full items-center hover:bg-blue-400 transition-all  py-[26px] "
              >
                <div
                  className="text-xs cursor-pointer"
                  onClick={() => setSelectImage(image)}
                >
                  {selectedImage ? (
                    selectedImage.id === image.id ? (
                      <FaEye />
                    ) : (
                      <IoIosEyeOff className="text-neutral-400" />
                    )
                  ) : (
                    <IoIosEyeOff className="text-neutral-400" />
                  )}
                </div>
                <div
                  className="w-[56px] h-[32px] cursor-pointer"
                  onClick={() => setSelectImage(image)}
                >
                  <Image
                    className="h-full w-full object-cover"
                    height={56}
                    width={32}
                    src={image.imageUrl}
                  />
                </div>
                <div>
                  <p className="text-xs w-[150px] truncate overflow-hidden">
                    {image.prompt}
                  </p>
                </div>
                <div className="cursor-pointer">
                  <HiOutlineDotsHorizontal />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PreviousGen;
