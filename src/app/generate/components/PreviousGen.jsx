import { IoIosClose } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { useGenerationState } from "@/appstate/image-gen-state";
import { FaEye } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosEyeOff } from "react-icons/io";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import ListBox, {
  ListBoxButton,
  ListBoxOption,
} from "@/components/ListBox/ListBox";
import Dropdown, {
  DropDownButton,
  DropDownItem,
} from "@/components/Dropdown/Dropdown";
import { handleExport } from "@/utilities/handleExport";
const PreviousGen = ({ closeTab }) => {
  const { images, setSelectImage, selectedImage } = useGenerationState();
  return (
    <div className="h-full w-full flex flex-col overflow-hidden ">
      <div className="flex items-center justify-between py-4 px-2 border-b border-black/10">
        <div className="font-semibold text-normal flex items-center pl-1 gap-3">
          <div className="p-2 rounded-md bg-blue-700 text-white">
            <HiMiniSquare2Stack />
          </div>
          <p>Previous Generation</p>
        </div>
        <button
          onClick={closeTab}
          className="text-neutral-400  active:text-neutral-500 "
        >
          <IoIosClose size={35} />
        </button>
      </div>

      <div className="my-3 h-full overflow-y-scroll">
        <div className="flex flex-col ">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="flex justify-between border-b border-black/10 gap-[10px] px-4 h-[32px] w-full items-center hover:bg-blue-400 transition-all  py-[26px] "
              >
                <div
                  className="text-xs cursor-pointer"
                  onClick={() => setSelectImage(image)}
                >
                  {selectedImage ? (
                    selectedImage.id === image.id ? (
                      <FaEye />
                    ) : (
                      <IoIosEyeOff className="text-neutral-700" />
                    )
                  ) : (
                    <IoIosEyeOff className="text-neutral-700" />
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
                    alt={image.prompt}
                  />
                </div>
                <div>
                  <p className="text-xs w-[80px] md:w-[150px] truncate overflow-hidden">
                    {image.prompt}
                  </p>
                </div>
                <div className="cursor-pointer">
                  <Dropdown
                    dropDownButton={
                      <DropDownButton>
                        <HiOutlineDotsHorizontal />
                      </DropDownButton>
                    }
                  >
                    <DropDownItem>
                      <div
                        onClick={() =>
                          handleExport(image.imageUrl, image.prompt, false)
                        }
                        className="px-2 text-sm py-2 bg-white w-full h-full text-black rounded-md"
                      >
                        Export
                      </div>
                    </DropDownItem>
                  </Dropdown>
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
