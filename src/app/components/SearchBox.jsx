"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";
const SearchBox = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const router = useRouter();
  const [input, setInput] = useState(searchTerm || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return null;

    router.push(`/search/web?searchTerm=${input}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-1 ml-10 mr-5 flex-grow max-w-3xl  items-center"
    >
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="w-full focus:outline-none "
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:m-1"
        onClick={() => setInput("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-3xl text-blue-500 pl-2 border-l-2 border-gray-300 mr-2" />
      <AiOutlineSearch
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default SearchBox;
