import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

export default function ListBox({
  onChange,
  selected,
  children,
  listBoxButton,
}) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative mt-1 ">
        {listBoxButton}
        <div className="z-[1000] ">
          <Transition
            as={Fragment}
            leave="transition ease-in duration-400"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-[1000] mt-1  w-full overflow-auto rounded-md  bg-white border border-black/10 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {children}
            </Listbox.Options>
          </Transition>
        </div>
      </div>
    </Listbox>
  );
}
export const ListBoxButton = ({ className, children }) => {
  return (
    <Listbox.Button
      as={"button"}
      className={twMerge(
        "relative w-full cursor-pointer rounded-lg py-2 px-2  sm:text-sm",
        className
      )}
    >
      {children}
    </Listbox.Button>
  );
};
export const ListBoxOption = ({ value, children }) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        `relative cursor-default select-none py-2 px-4 cursor-pointer `
      }
      value={value}
    >
      {children}
    </Listbox.Option>
  );
};
