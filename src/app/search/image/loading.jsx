import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const loading = () => {
  const results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.map((result) => (
          <div className="mb-8" key={result}>
            <div className="group">
              <div>
                <Skeleton className="h-60 w-80" />
              </div>
              <div>
                <h2 className="group-hover:underline tuencate text-xl">
                  <Skeleton className="w-80" />
                </h2>
              </div>
              <div>
                <p className="group-hover:underline text-gray-600">
                  <Skeleton className="w-80" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
