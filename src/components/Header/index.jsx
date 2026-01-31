import React from "react";
import { Input } from "antd";

const Header = () => {
  return (
    // <header className="flex gap-20 items-center justify-center w-full">
    //   <h1 className="text-4xl font-bold">Anonime</h1>
    //   <p className="text-gray-500">Home</p>
    //   <p className="text-gray-500">List anime</p>
    //   <Input
    //     rootClassName="rounded-[20px]"
    //     // style={{ borderRadius: "20px" }}
    //     placeholder="Search anime or movie"
    //   ></Input>
    // </header>
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
            borderRadius: "9999px" /* tương đương rounded-full */,
            paddingLeft: "1.5rem" /* tương đương px-6 (6 * 0.25rem) */,
            paddingRight: "1.5rem",
            paddingTop: "0.5rem" /* tương đương py-2 (2 * 0.25rem) */,
            paddingBottom: "0.5rem",
            outline: "2px solid transparent",
            outlineOffset: "2px" /* tương đương outline-none */,
            fontSize: "0.875rem" /* tương đương text-sm */,
            border: "1px solid transparent",
            transition: "border-color 0.2s" /* giúp hiệu ứng mượt hơn */,
          }}
        />
      </div>
    </nav>
  );
};

export default Header;
