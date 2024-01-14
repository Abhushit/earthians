"use client";
import Image from "next/image";
import Link from "next/link";

const HomePageNavbar = ({ token }) => {
  return (
    <header className="max-w-[90rem] m-auto">
      <nav className="flex gap-10 justify-between items-center w-full pt-6">
        <div>
          <Image
            src="/images/earthians-logo.png"
            alt="earthains"
            width={200}
            quality={70}
            height={200}
            className="w-[285px] h-[32px] flex-shrink-0"
            priority={true}
          />
        </div>
        <ul className="flex gap-20 text-white font-outfit text-base font-semibold mx-10">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/faq"}>FAQ</Link>
          </li>
          <li>
            <Link href={"/plans"}>Plans</Link>
          </li>
          <li>
            <Link href={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link href={"/contactus"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomePageNavbar;
