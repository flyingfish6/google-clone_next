import Link from "next/link";
import React from "react";
import image from "../../../public/image.png";
import SearchBox from "./SearchBox";
import { RiSettings3Fill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import Image from "next/image";
const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between ">
        <Link href="/">
          <Image src={image} width={120} height={40} alt="google" />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex ">
          <RiSettings3Fill className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer items-center" />
          <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer items-center" />
        </div>
        <button className="ml-1 bg-blue-500 px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;
