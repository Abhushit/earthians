import * as React from "react";
import Image from "next/image";

function Navbar() {
  const iconClasses =
    "text-neutral-400 cursor-pointer text-lg mx-4 hover:text-white";
  return (
    <div className="w-full h-full bg-[rgb(21,21,23)]">
      <nav className="container mx-auto flex items-center h-full justify-between px-4 lg:px-0">
        <div className="flex items-center gap-4">
          <Image
            src="/images/earthians-logo.png"
            alt="earthain"
            width={200}
            height={200}
          />
          <div className="flex items-center">
            <i className={`far  fa-circle ${iconClasses}`}></i>
            <i className={`fas fa-paint-brush ${iconClasses}`}></i>
            <i className={`fas fa-eraser ${iconClasses}`}></i>
            <i className={`fas fa-arrows-alt ${iconClasses}`}></i>
            <i className={`fas fa-fill-drip ${iconClasses}`}></i>
            <i className={`fas fa-file-export ${iconClasses}`}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
