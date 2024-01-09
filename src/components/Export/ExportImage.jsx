import { useGenerationState } from "@/appstate/image-gen-state";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

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


const ExportImage = () => {
    // zustand state
    const selectedImage = useGenerationState((state) => state.selectedImage);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleExportClick = (imageUrl, prompt, upscale) => {
        handleExport(imageUrl, prompt, upscale);
        setShowDropdown(false);
    };



    return <>

        <div className="relative inline-block">
            <button
                className={twMerge(
                    "px-5 py-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-500 transition",
                    !selectedImage ? "bg-blue-300 opacity-60" : ""
                )}
                onClick={toggleDropdown}
                disabled={!selectedImage}
            >
                Export
            </button>

            {showDropdown && (
                <div className="absolute top-8 right-0 bg-slate-950 border border-gray-200 rounded shadow z-[100] w-56 mt-1 text-white transition">
                    <div className="absolute top-2 right-2 cursor-pointer" onClick={toggleDropdown}>
                        <IoMdCloseCircle className="opacity-50 hover:opacity-100 transition" />
                    </div>
                    <button
                        className="block  mt-6 w-full py-2 px-4 text-left text-sm hover:bg-slate-800 transition"
                        onClick={() => handleExportClick(selectedImage.imageUrl, selectedImage.prompt, false)}
                    >
                        Export as PNG
                    </button>
                    <button
                        className="block w-full py-2 px-4 text-left text-sm hover:bg-slate-800 transition"
                        onClick={() => handleExportClick(selectedImage.imageUrl, selectedImage.prompt, true)}
                    >
                        Export as Upscaled PNG
                    </button>
                </div>
            )}
        </div>
    </>
}

export default ExportImage