import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Dropdown({ dropDownButton, children }) {
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
export const DropDownButton = ({ children, className = "" }) => {
  return <Menu.Button className={twMerge(className)}>{children}</Menu.Button>;
};
export const DropDownItem = ({ children }) => {
  return (
    <div className="px-1 py-1 ">
      <Menu.Item as={"div"}>
        {({ active }) => {
          return <button>{children}</button>;
        }}
      </Menu.Item>
    </div>
  );
};
