"use client";

import Image from "next/image";
import HomeHeader from "./components/HomeHeader";
import HomeSearch from "./components/HomeSearch";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <img src="image.png" width={300} height={100} alt="google" />
        <HomeSearch />
      </div>
    </div>
  );
}
