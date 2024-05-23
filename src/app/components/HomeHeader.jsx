import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
const HomeHeader = () => {
  return (
    <header>
      <div className="text-sm justify-end items-center flex p-5 space-x-2">
        <Link className="hover:underline" href="https://mail.google.com">
          Gmail
        </Link>
        <Link className="hover:underline" href="https://image.google.com">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
