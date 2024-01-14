import { Tab } from "@headlessui/react";
import CreateTab from "./CreateTab";
import { Fragment, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button/Button";

function CreateOrUpload({
  setData,
  data,
  setError,
  error,
  selectedIndex,
  setSelectedIndex,
}) {
  return (
    <div className="h-full w-full">
      <Tab.Group
        selectedIndex={selectedIndex}
        onChange={(index) => {
          setSelectedIndex(index);
          setError({
            isError: false,
            error: null,
          });
        }}
        defaultIndex={0}
        as={"div"}
        className="w-full"
      >
        <Tab.List className={"flex items-center w-full  px-4"}>
          <div className="flex gap-2 items-center w-full">
            <Tab
              onClick={() => setSelectedIndex(0)}
              className={twMerge(
                "outline-none text-sm font-semibold rounded-md text-black py-1.5 ",
                selectedIndex === 0
                  ? "underline underline-offset-4 text-blue-700"
                  : ""
              )}
            >
              Create
            </Tab>
            <div>/</div>
            <Tab
              onClick={() => setSelectedIndex(1)}
              className={twMerge(
                "outline-none text-sm  font-semibold rounded-md text-black py-1.5",
                selectedIndex === 1
                  ? "underline underline-offset-4 text-blue-700"
                  : ""
              )}
            >
              Upload
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels as={"div"}>
          {error.isError && (
            <label className="px-4 text-sm text-red-500">{error.error}</label>
          )}
          <Tab.Panel className={"h-full px-4 "}>
            <textarea
              value={data.prompt}
              onChange={(e) => {
                setData((prev) => ({
                  ...prev,
                  prompt: e.target.value,
                }));
              }}
              className="w-full border border-blue-700 mt-2 resize-none  h-36 outline-none text-sm px-2 py-2 rounded-md "
              placeholder="Enter your imagination"
            />
          </Tab.Panel>
          <Tab.Panel className={"h-full px-4"}>
            {" "}
            <div className="mt-2 relative py-4 px-4 rounded-md border border-blue-700 cursor-pointer">
              <input
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    file: e.target.files[0],
                  }));
                }}
                type="file"
                className={twMerge(
                  "absolute top-0 cursor-pointer left-0 opacity-0 bg-transparent h-full w-full"
                )}
              />
              <div className="text-sm cursor-pointer">
                {data.file ? data.file.name : "Upload a image file"}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
export default CreateOrUpload;
