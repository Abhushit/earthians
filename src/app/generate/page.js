"use client";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { CiCircleCheck } from "react-icons/ci";
import { FaMagic, FaRegUserCircle } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import CreateTab from "./components/CreateTab";
import PreviousGen from "./components/PreviousGen";
import { useGenerationState } from "@/appstate/image-gen-state";
import Navbar from "@/components/Navbar/Navbar";
import Modal, { ModalPanel } from "@/components/Modal/Modal";
import { IoIosClose } from "react-icons/io";
import Button from "@/components/Button/Button";
import Community from "@/components/Community/community";
import ArtworkSection from "@/components/ArtworkSection/artworkSection";
import Footer from "@/components/Footer/footer";
import { MdAddBox } from "react-icons/md";
import { useAuthState } from "@/appstate/auth-state";
import { useRouter } from "next/navigation";
export default function Generate() {
  const selectedImage = useGenerationState((state) => state.selectedImage);
  const { setOpenUpgradeModal, openUpgradeModal } = useGenerationState();
  const { user } = useAuthState();
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [prevTab, setPrev] = useState(null);

  const tabs = [
    {
      icon: MdAddBox,
      name: "Create",
      component: CreateTab,
      isOpen: false,
    },
    {
      name: "Previous",
      icon: HiMiniSquare2Stack,
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
    <main className="h-screen w-screen overflow-x-hidden ">
      <nav className="h-[9%]  ">
        <Navbar openModal={() => setOpenUpgradeModal(true)} />
      </nav>
      <div className="h-[91%] bg-sky-100/30 z-[90] flex w-full relative z-[90] ">
        <div
          className={twMerge(
            "h-full left-0 border-t border-black/10 bg-white py-2 z-[10000] lg:z-[100] overflow-hidden",
            "w-16 flex flex-col justify-between items-center gap-2 relative",
            openSidebar ? "" : "border border-black/10 "
          )}
        >
          <div className="flex flex-col  gap-2 z-[100]">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  onClick={() => openSidebarHandler(tab, i)}
                  key={i}
                  className={twMerge(
                    "rounded-md text-lg w-10 h-10 flex flex-col justify-center items-center",
                    openSidebar
                      ? i === tabIndex
                        ? "border  border-black/20"
                        : ""
                      : ""
                  )}
                >
                  <Icon
                    className={twMerge(
                      "text-black hover:text-blue-700 ",
                      openSidebar
                        ? i === tabIndex
                          ? "text-blue-700"
                          : "text-black/60"
                        : "text-black/60"
                    )}
                  />
                </button>
              );
            })}
          </div>
          <div className="z-[100]">
            <button className="cursor-pointer h-8 w-8  overflow-hidden rounded-full focus:ring-2 focus:ring-blue-400">
              
              <Image
                height={20}
                width={20}
                src={user?.profileUrl}
                className={twMerge("h-full w-full")}
              />
            </button>
          </div>
        </div>
        <div
          className={twMerge(
            "w-full h-full absolute bg-black/40 lg:hidden z-[900] backdrop-blur-sm ",
            openSidebar ? "block lg:hidden" : "hidden"
          )}
        />
        <div
          className={twMerge(
            "overflow-hidden h-full bg-white  border border-black/10 text-black z-[50] transition-all duration-300 transform",
            "absolute left-14 lg:left-0 lg:relative z-[1000] lg:z-[90] shadow-xl",
            openSidebar
              ? "translate-x-0 w-[250px] md:w-[350px]"
              : "-translate-x-96 w-0"
          )}
        >
          <RenderTab closeTab={() => setOpenSidebar(false)} />
        </div>
        <div
          className={twMerge(
            "h-full bg-sky-100/30 transition-width w-[95%] duration-300",
            openSidebar ? "lg:w-[70%]" : "lg:w-[95%]"
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
                <div className="w-full relative bg-neutral-400/20 h-full flex flex-col justify-center items-center">
                  {/* <div className="absolute">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-700"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div> */}
                  <Image
                    key={selectedImage.imageUrl}
                    className="h-full w-full  object-cover z-[100]"
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
      <Modal
        isOpen={openUpgradeModal}
        closeModal={() => setOpenUpgradeModal(false)}
      >
        <div className="h-[500px] w-full px-2 py-6 bg-neutral-900 text-white rounded-xl flex justify-center ">
          <div className="hidden lg:w-[40%] h-full px-4 lg:flex flex-col justify-center ">
            <div className="w-full h-full rounded-lg overflow-hidden bg-black/20">
              <Image
                height={500}
                width={500}
                quality={0}
                className="w-full h-full object-cover object-right"
                src={"/images/plans.jpg"}
              />
            </div>
          </div>
          <div className="w-full lg:w-[60%] h-full px-4">
            <div className="flex justify-between items-center">
              <div className="text-xl text-white font-semibold">
                Upgrade your plans
              </div>
              <button
                onClick={() => setOpenUpgradeModal(false)}
                className="text-neutral-400 active:text-neutral-500"
              >
                <IoIosClose size={35} />
              </button>
            </div>
            <p className="text-neutral-400 text-left text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              iure nemo delectus.
            </p>
            <div className="flex flex-col mt-5 gap-4">
              <div className="flex items-start  gap-3">
                <div className="h-10 w-10 bg-blue-700 rounded-md"></div>
                <div className="flex flex-col items-start gap-1">
                  <div className="text-sm font-semibold text-white">Plan 1</div>
                  <div className="text-xs text-left text-neutral-400 max-w-[300px]">
                    Generate an number of files and directories for accelerated
                    rendering.
                  </div>
                </div>
              </div>
              <div className="flex items-start  gap-3">
                <div className="h-10 w-10 bg-blue-700 rounded-md"></div>
                <div className="flex flex-col items-start gap-1">
                  <div className="text-sm font-semibold text-white">Plan 2</div>
                  <div className="text-xs text-left text-neutral-400 max-w-[300px]">
                    Generate an number of files and directories for accelerated
                    rendering.
                  </div>
                </div>
              </div>
              <div className="flex items-start  gap-3">
                <div className="h-10 w-10 bg-blue-700 rounded-md"></div>
                <div className="flex flex-col items-start gap-1">
                  <div className="text-sm font-semibold text-white">Plan 3</div>
                  <div className="text-xs text-left text-neutral-400 max-w-[300px]">
                    Generate an number of files and directories for accelerated
                    rendering.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-3 mt-4  px-4 rounded-lg border border-2 border-blue-700 flex justify-between items-center bg-black/20">
              <div className="text-sm text-left">Choose the best plan.</div>
              <Button className={"px-4 text-sm"}>See Plans</Button>
            </div>
            <div className="w-full py-3 mt-2  px-4 rounded-lg flex justify-between items-center bg-black/20">
              <div className="text-sm text-left">
                Looking for enterprise level <br />
                features and support?
              </div>
              <Button
                className={
                  "px-4 text-sm bg-neutral-600 active:bg-neutral-700 border border-neutral-600"
                }
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      {/* )} */}
   
    </main>
  );
}
