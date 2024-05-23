"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCamera } from "react-icons/ai";
const SearchHeaderOptions = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const searchTerm = searchParams.get("searchTerm"); //搜索值
  const selectTab = (tab) => {
    console.log(pathName);
    const startIndex = searchParams.get("start") || 1;
    router.push(
      `/search/${
        tab === "Images" ? "image" : "web"
      }?searchTerm=${searchTerm}&start=${startIndex}`
    );
  };

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab("web")}
        className={`flex items-center  space-x-1 border-b-4  border-transparent active:text-blue-500 cursor-pointer pb-2 px-3 ${
          pathName === "/search/web" && "!text-blue-500 !border-blue-500"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center  space-x-1 border-b-4  border-transparent active:text-blue-500 cursor-pointer pb-2 px-3 ${
          pathName === "/search/image" && "!text-blue-500 !border-blue-500"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
