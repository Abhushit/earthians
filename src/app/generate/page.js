"use client";
import { FaMagic } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import CreateTab from "./components/CreateTab";
import PreviousGen from "./components/PreviousGen";
import { useGenerationState } from "@/appstate/image-gen-state";
import Navbar from "@/components/Navbar/Navbar";

export default function Generate() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [prevTab, setPrev] = useState(null);
  const tabs = [
    {
      icon: FaMagic,
      name: "Create",
      component: CreateTab,
      isOpen: false,
    },
    {
      name: "Previous",
      icon: FaLayerGroup,
      component: PreviousGen,
      isOpen: false,
    },
  ];
  function openSidebarHandler(tab, i) {
    setTabIndex(i);
    if (!openSidebar && prevTab !== i) {
      setOpenSidebar(true);
    }
    if (prevTab === i) {
      setOpenSidebar(!openSidebar);
    }
    setPrev(i);
  }
  const RenderTab = tabs[tabIndex].component;
  const selectedImage = useGenerationState((state) => state.selectedImage);

  return (
    <main className="h-screen w-screen overflow-x-hidden">
      <nav className="h-[8%]  bg-neutral-900">
        <Navbar />
      </nav>
      <div className="h-[92%] flex w-full relative">
        <div
          className={twMerge(
            "h-full  left-0 border transition duration-300 border-white/10 bg-neutral-900 py-4 z-[100]",
            "w-[5%] flex flex-col  items-center gap-6"
          )}
        >
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <button onClick={() => openSidebarHandler(tab, i)} key={i}>
                <Icon
                  className={twMerge(
                    "text-xl hover:text-white",
                    openSidebar
                      ? i === tabIndex
                        ? "text-white"
                        : "text-white/60"
                      : "text-white/60"
                  )}
                />
              </button>
            );
          })}
        </div>

        <div
          className={twMerge(
            "h-full bg-neutral-900  border border-white/10 text-white  z-[90] transition duration-700 ",
            openSidebar
              ? "translate-x-0  w-[25%]"
              : "absolute left-0 -translate-x-96"
          )}
        >
          <RenderTab closeTab={() => setOpenSidebar(false)} />
        </div>

        <div
          className={twMerge(
            "h-full transition ",
            openSidebar ? "w-[70%]" : "w-[95%]"
          )}
        >
          {selectedImage && (
            <div
              className={twMerge(
                "h-full  w-full flex flex-col justify-center  items-center "
              )}
            >
              <div className="flex flex-col h-[90%] w-[90%] overflow-hidden">
                <div className="font-semibold text-blue-700 self-start text-lg capitalize py-2">
                  {selectedImage.prompt}
                </div>{" "}
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <Image
                    key={selectedImage.imageUrl}
                    className="h-full w-full  object-cover"
                    src={selectedImage.imageUrl}
                    width={1024}
                    height={1024}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
