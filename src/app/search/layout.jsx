import React from "react";
import "./search.css";
import SearchHeader from "../components/SearchHeader";
import SearchHeaderOptions from "../components/SearchHeaderOptions";
const laypout = ({ children }) => {
  return (
    <div>
      <main>
        <SearchHeader />
        <SearchHeaderOptions />
        {children}
      </main>
    </div>
  );
};

export default laypout;
