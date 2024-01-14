import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Dropdown({ dropDownButton, children, className }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>{dropDownButton}</div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="absolute -right-2  mt-1 origin-bottom-right z-[1000]">
          <div className="absolute -top-1.5 right-2 h-3 w-3 -z-[100] border border-black/20 bg-white rotate-45 "></div>
          <Menu.Items
            className={twMerge(
              "divide-y divide-gray-100 rounded-md bg-white shadow-lg outline-none  border border-black/20 z-[1000]",
              className
            )}
          >
            {children}
          </Menu.Items>
        </div>
      </Transition>
    </Menu>
  );
}
export const DropDownButton = ({ children, className = "" }) => {
  return <Menu.Button className={twMerge(className)}>{children}</Menu.Button>;
};
export const DropDownItem = ({ children }) => {
  return <Menu.Item as={"div"}>{children}</Menu.Item>;
};
