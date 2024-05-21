import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";
const HomeSearch = () => {
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return null;
    //除去前后的空格
    router.push(`/search/web?searchTerm=${input}`);
  };
  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button
          className="bg-amber-500 py-1 px-2 rounded-md  hover:brightness-105 hover:shadow-md transition-shadow"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          className="btn flex items-center rounded-md justify-center disabled:opacity-80 bg-amber-500 py-1 px-2  hover:brightness-105 hover:shadow-md transition-shadow"
          disabled={randomSearchLoading}
          onClick={randomSearch}
        >
          {randomSearchLoading ? <Spinner /> : "I am Feeling Lucky"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
