import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const loading = () => {
  const results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        <Skeleton className="max-w-xl" />
      </p>
      {results.map((result) => (
        <div key={result} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <div className="text-sm truncate">
              <Skeleton />
            </div>
            <div className="group-hover:underline text-blue-800 decoration-blue-800 text-xl">
              <Skeleton />
            </div>
          </div>
          <p className="text-gray-600">
            <Skeleton />
          </p>
          {/* <p className="text-gray-600">{result.htmlSnippet}</p> */}
        </div>
      ))}
    </div>
  );
};

export default loading;
