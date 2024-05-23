import React from "react";
import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButton from "./PaginationButton";
const WebSearchResults = ({ results }) => {
  //   console.log(results);
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline text-blue-800 decoration-blue-800 text-xl"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
          {/* <p className="text-gray-600">{result.htmlSnippet}</p> */}
        </div>
      ))}
      <PaginationButton />
    </div>
  );
};

export default WebSearchResults;
