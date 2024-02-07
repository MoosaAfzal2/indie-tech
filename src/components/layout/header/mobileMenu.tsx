"use client";
import { lato, merriweather } from "@/assets/fonts";
import Menu from "@/assets/svgs/menu";
import { ChevronDownIcon, ChevronRightIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { NavItems } from ".";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SocialLinks from "./socialLinks";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${merriweather.className}`}>
      <div onClick={() => setOpen(true)} className="text-white">
        <Menu />
      </div>
      <div
        className={cn([
          "bg-foreground fixed inset-0 z-40",
          open ? "h-full overflow-y-auto" : "h-0 overflow-hidden",
        ])}
      >
        <div
          className={cn([
            "transition-all duration-500",
            open ? "opacity-100 visible" : "opacity-0 invisible",
          ])}
        >
          <div onClick={() => setOpen(false)} className="flex justify-end p-4">
            <X name="close" className="text-white" size={18} />
          </div>
          <div className="w-full flex flex-col items-center sm:gap-10 gap-8 text-center sm:py-2 py-6 px-4">
            <ul className="w-full flex flex-col items-center gap-10">
              {NavItems.map((item, index) => (
                <li key={index} className="w-full text-center">
                  <MobileNavItem
                    text={item.text}
                    href={item.href}
                    dropdown={item.dropdown}
                  />
                </li>
              ))}
            </ul>
            <Button className={`${lato.className} text-xl`} size={"lg"}>
              Support Us
            </Button>
            <Link
              className="sm:text-lg text-white sm:font-semibold font-medium hover:text-[#f1a64a] transition-all duration-300"
              href={"/login"}
            >
              Login
            </Link>
            {/* Social Icons */}
            <div className="max-sm:mt-4">
              <SocialLinks className="sm:!gap-8 !gap-6" Iconsizes={28} />
            </div>
            {/* Search */}
            <div className="w-full px-1">
              <input
                name="Search"
                type="text"
                placeholder="Search..."
                className="text-sm text-black placeholder:text-black w-full bg-white h-full rounded-[2px] py-[11px] px-2 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileNavItem = ({
  text,
  href,
  dropdown,
}: {
  text: string;
  href: string;
  dropdown?: {
    link: string;
    href: string;
  }[];
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full text-white sm:text-sm text-[19px] font-semibold">
      {!dropdown ? (
        <Link
          className="hover:text-[#f1a64a] transition-all duration-300"
          href={href}
        >
          {text}
        </Link>
      ) : (
        <div className="relative w-full">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex justify-center items-center"
          >
            <div
              className={cn([
                "transition-all duration-300",
                dropdownOpen ? "text-[#f1a64a]" : "",
              ])}
            >
              {text}
            </div>
            <ChevronDownIcon
              size={22}
              className={cn([
                "max-sm:w-7 max-sm:h-7 absolute right-0 transition-all duration-300",
                dropdownOpen ? "text-[#f1a64a] rotate-180" : "rotate-0",
              ])}
            />
          </button>
          {dropdownOpen && (
            <div className="font-medium flex flex-col items-center gap-10 pt-10">
              {dropdown.map((item, index) => (
                <Link
                  key={index}
                  className="flex items-center gap-1 hover:text-[#f1a64a] transition-all duration-300"
                  href={item.href}
                >
                  <ChevronRightIcon size={16} />
                  {item.link}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
