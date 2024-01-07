"use client";
import { FaMagic } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

import Button from "@/components/Button/Button";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import CreateTab from "./components/CreateTab";
import PreviousGen from "./components/PreviousGen";

export default function Generate() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [prevTab, setPrev] = useState(null);
  const tabs = [
    {
      icon: FaMagic,
      component: CreateTab,
      isOpen: false,
    },
    {
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
  return (
    <main className="h-screen w-screen overflow-x-hidden">
      <nav className="h-[8%]  bg-neutral-900"></nav>
      <div className="h-[92%] flex w-full relative">
        <div
          className={twMerge(
            "h-full  transition-all duration-700 ease-in-out ",
            openSidebar ? "w-[80%]" : "w-[95%]"
          )}
        ></div>
        <div
          className={twMerge(
            "h-full bg-neutral-900  border w-[15%] border-white/10 text-white  z-[90] transition duration-700 ",
            openSidebar
              ? "translate-x-0  w-[15%]"
              : "absolute right-16 translate-x-96"
          )}
        >
          <RenderTab closeTab={() => setOpenSidebar(false)} />
        </div>
        <div
          className={twMerge(
            "h-full absolute right-0 border transition duration-300 border-white/10 bg-neutral-900 py-4 z-[100]",
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
      </div>
    </main>
  );
}
