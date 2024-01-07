import { IoIosClose } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const PreviousGen = ({ closeTab }) => {
  const [imageState, setImageState] = useState([
    {
      imageUrl:
        "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prompt: "green and gray mountains under white clouds",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prompt: "white and blue soccer ballon green grass field",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1607611475229-a02a068cc758?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prompt: "man in black jacket standing",
    },
  ]);

  return (
    <div className="h-full w-full  ">
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

      <div className="p-3">
        <div className="flex flex-col">
          {imageState.map((image, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 mt-3 p-2 ${(index + 1) === imageState.length ? '' : 'border-b border-gray-500'}`}
            >
              <div>
                <Image
                  className="rounded-md object-cover"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  src={image.imageUrl}
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-xs">{image.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PreviousGen;
