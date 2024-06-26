import { FaCheck } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import Button from "@/components/Button/Button";
import Dropdown, { DropDownButton } from "@/components/Dropdown/Dropdown";
import ListBox, {
  ListBoxButton,
  ListBoxOption,
} from "@/components/ListBox/ListBox";
import { useState } from "react";
import { FaMagic } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { MdAddBox } from "react-icons/md";

import {
  generateRandomId,
  useGenerationState,
} from "@/appstate/image-gen-state";
import CreateOrUpload from "./CreateOrUpload";
const CreateTab = ({ closeTab }) => {
  const list = [
    {
      name: "General",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi!",
    },
    {
      name: "Pastel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi!",
    },
    {
      name: "Volume",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi!",
    },
    {
      name: "Technicolor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi!",
    },
  ];
  const [selected, setSelected] = useState(list[0].name);
  const [data, setData] = useState({
    prompt: "",
    negPrompt: "",
    numberOfImage: 1,
    style: selected,
    file: null,
  });
  const [error, setError] = useState({
    isError: false,
    error: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { generateImage, setSelectImage, images, setOpenUpgradeModal } =
    useGenerationState();

  function handleGenerateImage() {
    const id = generateRandomId(16);
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex].imageUrl;

    if (selectedIndex === 1) {
      if (data.file === null) {
        setError({
          isError: true,
          error: "File must be upload",
        });
        return;
      }
      const fileURL = URL.createObjectURL(data.file);
      const generation = {
        id: id,
        imageUrl: fileURL,
        prompt: data.file.name.substring(0, data.file.name.lastIndexOf(".")),
      };
      generateImage(generation);
      setSelectImage(generation);
      return;
    } else {
      if (data.prompt.length === 0) {
        setError({
          isError: true,
          error: "Prompt must not be empty ",
        });
        return;
      }

      const generation = {
        id: id,
        imageUrl: randomImage,
        prompt: data.prompt,
      };
      generateImage(generation);
      setSelectImage(generation);
    }
    setError({
      isError: false,
      error: null,
    });
  }
  return (
    <>
      <div className="w-full h-full  flex flex-col justify-between">
        <div className="flex items-center justify-between  py-4 px-4 border-b  border-black/10">
          <div className="font-semibold text-normal flex items-center gap-3">
            <div className="p-2 rounded-md bg-blue-700 text-white">
              <MdAddBox />
            </div>
            <p>Create</p>
          </div>
          <button
            onClick={closeTab}
            className="text-neutral-400  active:text-neutral-500 "
          >
            <IoIosClose size={35} />
          </button>
        </div>

        <div className="h-full overflow-y-scroll w-full  py-2 ">
          <div className="flex flex-col border-b border-black/10  pb-5">
            <CreateOrUpload
              setData={setData}
              data={data}
              error={error}
              setError={setError}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
          <div className="flex flex-col">
            <label className="pt-2 font-semibold px-4 text-sm">Style</label>
            <div className="px-4 mt-2 z-[1000] ">
              <ListBox
                selected={selected}
                onChange={setSelected}
                listBoxButton={
                  <ListBoxButton className="px-4 border border-blue-700 text-left py-3">
                    {selected}
                  </ListBoxButton>
                }
              >
                {list.map((item, i) => {
                  return (
                    <ListBoxOption value={item.name} key={i}>
                      <div className={"flex items-start gap-3"}>
                        <div className="h-14 w-28 rounded-md  border border-blue-700"></div>
                        <div className="flex flex-col justify-start">
                          <div className="text-sm ">{item.name}</div>
                          <div className="text-xs text-neutral-500">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </ListBoxOption>
                  );
                })}
              </ListBox>
            </div>
            <div className="w-full border-b border-black/10 mt-4 z-[90] "></div>
          </div>
          {/* <div className="flex flex-col border-b border-white/10 pt-2 pb-5">
            <label className="text-white font-semibold px-4 text-sm">
              Negative Prompt
            </label>
            <input
              onChange={(e) => {
                setData((prev) => ({
                  ...prev,
                  negPrompt: e.target.value,
                }));
              }}
              className="bg-black/20 mt-2 resize-none py-3 outline-none border border-white/10 text-sm px-2 py-2 rounded-md mx-4"
              placeholder="Enter negative prompt"
            />
          </div> */}

          <div className="flex flex-col pt-3 pb-5">
            <label className=" font-semibold px-4 text-sm">
              Number Of Images
            </label>
            <div className="flex items-center gap-3 px-4 mt-2">
              <div
                className="relative"
                onClick={() => {
                  setData((prev) => ({
                    ...prev,
                    numberOfImage: 1,
                  }));
                }}
              >
                <div className=" h-4 w-4 absolute -right-1 top-1  rounded-full bg-blue-700 flex justify-center items-center">
                  <FaCheck className="text-white text-sm" size={10} />
                </div>
                <div className="bg-white/20 mt-2 resize-none h-10 w-10 outline-none border border-blue-700 text-sm py-2 rounded-md flex items-center justify-center cursor-pointer">
                  1
                </div>
              </div>
              <div
                className="relative "
                onClick={() => {
                  setData((prev) => ({
                    ...prev,
                    numberOfImage: 2,
                  }));
                  setOpenUpgradeModal(true);
                }}
              >
                <div className=" h-4 w-4 absolute -right-1 top-1  rounded-full bg-neutral-400  flex justify-center items-center">
                  <FaLock className="text-white " size={10} />
                </div>
                <div className="text-neutral-600 bg-white/20 mt-2 resize-none h-10 w-10 outline-none border border-blue-700 text-sm py-2 rounded-md flex items-center justify-center cursor-pointer">
                  2
                </div>
              </div>

              <div
                className="relative "
                onClick={() => {
                  setData((prev) => ({
                    ...prev,
                    numberOfImage: 3,
                  }));
                  setOpenUpgradeModal(true);
                }}
              >
                <div className=" h-4 w-4 absolute -right-1 top-1  rounded-full bg-neutral-400  flex justify-center items-center">
                  <FaLock className="text-white " size={10} />
                </div>
                <div className="text-neutral-600 bg-white/20 mt-2 resize-none h-10 w-10 outline-none border border-blue-700 text-sm py-2 rounded-md flex items-center justify-center cursor-pointer">
                  3
                </div>
              </div>
              <div
                className="relative "
                onClick={() => {
                  setData((prev) => ({
                    ...prev,
                    numberOfImage: 4,
                  }));
                  setOpenUpgradeModal(true);
                }}
              >
                <div className=" h-4 w-4 absolute -right-1 top-1  rounded-full bg-neutral-400  flex justify-center items-center">
                  <FaLock className="text-white " size={10} />
                </div>
                <div className="text-neutral-600 bg-white/20 mt-2 resize-none h-10 w-10 outline-none border border-blue-700 text-sm py-2 rounded-md flex items-center justify-center cursor-pointer">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-4">
          <Button className="py-2 w-full" onClick={handleGenerateImage}>
            Create
          </Button>
        </div>
      </div>
    </>
  );
};
export default CreateTab;
