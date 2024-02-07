"use client";
import { merriweather } from "@/assets/fonts";
import SearchIcon from "@/assets/svgs/search";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React, { useState } from "react";

const Search = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={merriweather.className}>
      <button
        name="search"
        onClick={() => setOpen(!open)}
        className="flex items-center fill-white w-4 h-5"
      >
        <SearchIcon />
      </button>
      <div
        className={cn([
          "absolute inset-0 bg-[#0d161e] flex items-center gap-6 xl:px-16 sm:px-8 px-4 py-3 transition-all duration-300",
          open ? "visible opacity-100" : "invisible opacity-0",
        ])}
      >
        <input
          name="Search"
          type="text"
          placeholder="Search..."
          className="text-2xl text-[#333333] placeholder:text-[#333333] w-full bg-[hsla(0,0%,100%,.8)] h-full rounded-sm py-2 px-4 outline-none"
        />
        <X
          onClick={() => setOpen(false)}
          stroke="#fafafa"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Search;
