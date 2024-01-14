"use client";
import * as React from "react";
import NextImage from "next/image";
import Button from "../Button/Button";
import { twMerge } from "tailwind-merge";

import { useGenerationState } from "@/appstate/image-gen-state";
import { IoMdCloseCircle } from "react-icons/io";
function Navbar({ openModal }) {
  const selectedImage = useGenerationState((state) => state.selectedImage);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [showColorDropDown, setShowColorDropDown] = React.useState(false);
  function handleExport(imageUrl, prompt, upscale) {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Enable cross-origin resource sharing for images

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const width = upscale ? img.width * 2 : img.width;
      const height = upscale ? img.height * 2 : img.height;

      canvas.width = width;
      canvas.height = height;

      if (upscale) {
        // To upscale, draw the image on the canvas twice its original size
        ctx.drawImage(img, 0, 0, width, height);
      } else {
        // Draw the image on the canvas at its original size
        ctx.drawImage(img, 0, 0);
      }

      // Convert the canvas content to data URL with PNG format
      const dataUrl = canvas.toDataURL("image/png");

      // Create a download link and trigger a click to download the image
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${prompt}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    img.src = imageUrl;
  }
  const toggleDropdown = () => {
    if (selectedImage === null) return;
    setShowDropdown(!showDropdown);
  };
  const handleExportClick = (imageUrl, prompt, upscale) => {
    handleExport(imageUrl, prompt, upscale);
    setShowDropdown(false);
  };
  const iconClasses =
    "text-neutral-400 hover:text-black cursor-pointer text-lg mx-4 transition duration-300 ease-in-out transform hover:scale-125";
  const [currentColor, setCurrentColor] = React.useState("#000");
  const [customColor, setCustomColor] = React.useState("#000");
  const handleColorChange = (colorEvent) => {
    const color = colorEvent.target.value;
    setCurrentColor(color);
    setCustomColor(color);
  };
  const handleCustomColorChange = (colorEvent) => {
    const color = colorEvent.target.value;
    setCustomColor(color);
  };
  const applyCustomColor = () => {
    setCurrentColor(customColor);
    setShowColorDropDown(false);
  };
  return (
    <div className="w-full h-full border border-black/10">
      <nav className=" flex justify-between items-center h-full justify-between px-4">
        <div className="flex items-center gap-4  mr-2 lg:mr-0 lg:pl-4">
          <div className="h-full max-w-[200px] sm:w-[200px]">
            <NextImage
              src="/images/logo_black.png"
              alt="earthain"
              className="h-full w-full object-contain"
              width={250}
              height={250}
              priority={true}
            />
          </div>
          {/* <div className="hidden lg:flex items-center">
            <i className={`far  fa-circle ${iconClasses}`}></i>
            <i className={`fas fa-paint-brush ${iconClasses}`}></i>
            <i className={`fas fa-eraser ${iconClasses}`}></i>
            <i className={`fas fa-arrows-alt ${iconClasses}`}></i>
            <i className={`fas fa-fill-drip ${iconClasses}`}></i>
            <i className={`fas fa-file-export ${iconClasses}`}></i>
            {/* <div className="flex relative">
              <i
                className={`fas fa-palette ${iconClasses}`}
                onClick={() => setShowColorDropDown((prev) => !prev)}
              />
              {showColorDropDown && (
                <div className="z-[100] absolute top-10 mt-2 left-0 bg-white shadow-lg rounded w-40 p-4">
                  <input
                    type="color"
                    value={currentColor}
                    onChange={handleColorChange}
                    className="w-full h-10 border-none cursor-pointer mb-2"
                    name="color-picker"
                  />
                  <input
                    type="text"
                    value={customColor}
                    onChange={handleCustomColorChange}
                    className="w-full h-10 p-2 border rounded mb-2"
                    name="hex-color-input"
                  />
                  <div className="bg-gray-200 p-2 rounded flex justify-between items-center">
                    <span className="text-gray-700 font-roboto">
                      {currentColor}
                    </span>
                    <button
                      className="font-roboto bg-blue-600 text-white p-1 rounded"
                      onClick={applyCustomColor}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
              <i
                className={`fas fa-paint-brush ${iconClasses}`}
                style={{ color: currentColor }}
              />
              <i className={`fas fa-eraser ${iconClasses}`} />
              <i className={`fas fa-expand-arrows-alt ${iconClasses}`} />
              <i className={`fas fa-fill ${iconClasses}`} />
              <i className={`fas fa-file-export ${iconClasses}`} />
            </div>
          </div> */}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Button
              onClick={openModal}
              className={twMerge(
                "px-4 py-1.5 text-sm border border-2 text-black active:text-white border-blue-700 bg-transparent font-semibold",
                "flex gap-1 items-center"
              )}
            >
              Upgrade 
            </Button>
            <div className="text-xl text-neutral-400 px-3">|</div>
            <Button
              className={
                "px-4 py-1.5 text-sm font-semibold border-2 border-blue-700"
              }
              onClick={toggleDropdown}
            >
              Export
            </Button>
            {showDropdown && (
              <div className="absolute top-16 right-2 bg-white border border-black/10  rounded-md shadow z-[100] w-56  text-black transition">
                <div
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <IoMdCloseCircle className="opacity-50 hover:opacity-100 transition" />
                </div>
                <button
                  className="block  mt-6 w-full py-2 px-4 text-left text-sm hover:bg-blue-400 transition"
                  onClick={() => {
                    if (selectedImage === null) return;

                    handleExportClick(
                      selectedImage.imageUrl,
                      selectedImage.prompt,
                      false
                    );
                  }}
                >
                  Export as PNG
                </button>
                <button
                  className="block w-full py-2 px-4 text-left text-sm hover:bg-blue-400 transition"
                  onClick={() => {
                    if (selectedImage === null) return;

                    handleExportClick(
                      selectedImage.imageUrl,
                      selectedImage.prompt,
                      true
                    );
                  }}
                >
                  Export as Upscaled PNG
                </button>
              </div>
            )}
          </div>
        </div>
        {/* <ExportImage /> */}
      </nav>
    </div>
  );
}
export default Navbar;
