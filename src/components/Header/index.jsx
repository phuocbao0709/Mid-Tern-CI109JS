import React from "react";
import { Input } from "antd";

const Header = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between mb-10">
      <div className="flex items-center gap-12">
        <h1 className="text-3xl font-bold tracking-tight">Anonime</h1>
        <ul className="hidden md:flex gap-8 text-gray-400">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">List anime</li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 mt-4 md:mt-0">
        <Input
          type="text"
          placeholder="Search anime or movie"
          className="search-input"
          style={{
            width: "100%",
            backgroundColor: "#2d3748",
            borderRadius: "9999px",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            outline: "2px solid transparent",
            outlineOffset: "2px",
            fontSize: "0.875rem",
            border: "1px solid transparent",
            transition: "border-color 0.2s",
          }}
        />
      </div>
    </nav>
  );
};

export default Header;
