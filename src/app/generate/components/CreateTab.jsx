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
import {
  generateRandomId,
  useGenerationState,
} from "@/appstate/image-gen-state";
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
  });
  const [error, setError] = useState(false);
  const { generateImage, setSelectImage, images } = useGenerationState();

  function handleGenerateImage() {
    if (data.prompt.length === 0) {
      setError(true);
      return;
    }
    setError(false);

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex].imageUrl;
    const id = generateRandomId(16);

    const generation = {
      id: id,
      imageUrl: randomImage,
      prompt: data.prompt,
    };
    generateImage(generation);
    setSelectImage(generation);
  }
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className="flex items-center justify-between h-16 px-4 border-y  border-white/10">
        <div className="font-semibold text-normal flex items-center gap-3">
          <div className="p-2 rounded-md bg-blue-700 text-white">
            <FaMagic />
          </div>
          <p>Create</p>
        </div>
        <button
          onClick={closeTab}
          className="text-slate-300  active:text-slate-400"
        >
          <IoIosClose size={35} />
        </button>
      </div>
      <div className="h-full overflow-y-scroll w-full  py-2 ">
        <div className="flex flex-col border-b border-white/10 pb-5">
          <label
            className={twMerge(
              "font-semibold px-4 text-sm",
              error ? "text-red-500" : "text-white"
            )}
          >
            {error ? "Prompt must not be empty" : "Prompt"}
          </label>
          <textarea
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                prompt: e.target.value,
              }));
            }}
            className="bg-black/20 mt-2 resize-none h-36 outline-none border border-white/10 text-sm px-2 py-2 rounded-md mx-4"
            placeholder="Enter your imagination"
          />
        </div>
        <div className="flex flex-col">
          <label className="pt-2 text-white font-semibold px-4 text-sm">
            Style
          </label>
          <div className="px-4 mt-2 z-[1000] ">
            <ListBox
              selected={selected}
              onChange={setSelected}
              listBoxButton={
                <ListBoxButton className="px-4 bg-black/20 text-left py-3 border border-white/10 ">
                  {selected}
                </ListBoxButton>
              }
            >
              {list.map((item, i) => {
                return (
                  <ListBoxOption value={item.name} key={i}>
                    <div className={"flex items-start gap-3"}>
                      <div className="h-14 w-28 rounded-md bg-black/5 border border-white/10"></div>
                      <div className="flex flex-col justify-start">
                        <div className="text-sm text-white">{item.name}</div>
                        <div className="text-xs text-neutral-400">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </ListBoxOption>
                );
              })}
            </ListBox>
          </div>
          <div className="w-full border-b border-white/10 mt-4 z-[90] "></div>
        </div>
        <div className="flex flex-col border-b border-white/10 pt-2 pb-5">
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
        </div>

        <div className="flex flex-col pt-2 pb-5">
          <label className="text-white font-semibold px-4 text-sm">
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
              <div className="bg-black/20 mt-2 resize-none h-10 w-10 outline-none border border-white/10 text-sm py-2 rounded-md flex items-center justify-center cursor-pointer">
                1
              </div>
            </div>
            <div
              className="relative "
              onClick={() => {
                setData((prev) => ({
                  ...prev,
                  numberOfImage: 4,
                }));
              }}
            >
              <div className=" h-4 w-4 absolute -right-1 top-1  rounded-full bg-neutral-600  flex justify-center items-center">
                <FaLock className="text-white " size={10} />
              </div>
              <div className="text-neutral-400 bg-black/20 mt-2 resize-none h-10 w-10 outline-none border border-white/10 text-sm py-2 rounded-md flex items-center justify-center cursor-pointer">
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
  );
};
export default CreateTab;
