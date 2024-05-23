"use client";
import { useEffect } from "react";
import React from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col mt-10 justify-center items-center">
      <h1 className="text-2xl">Something went wrong</h1>
      <button
        onClick={() => reset()}
        className="mt-5 hover:text-amber-500 hover:underline"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
