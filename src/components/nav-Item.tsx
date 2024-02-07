import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface NavItemI {
  text: string;
  href: string;
  dropdown?: {
    link: string;
    href: string;
  }[];
}

const NavItem = ({ text, href, dropdown }: NavItemI) => {
  return (
    <div className="group relative py-[5.5px]">
      {!dropdown ? (
        <Link
          className="text-lg font-bold text-foreground hover:text-secondary transition-all duration-300"
          href={href}
        >
          {text}
        </Link>
      ) : (
        <>
          <div className="cursor-pointer flex items-center gap-2 text-lg font-bold text-foreground group-hover:text-secondary transition-all duration-300">
            {text}
            <ChevronDownIcon
              size={16}
              className="mt-1 rotate-0 group-hover:rotate-180 transition-all duration-300"
            />
          </div>
          <div className="h-0 group-hover:h-auto overflow-hidden absolute top-6 group-hover:top-[39px] transition-all duration-300">
            <ul className="flex flex-col gap-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 w-full min-w-[240px] bg-white border-t-2 border-[#f96baa] transition-all duration-300 p-5">
              {dropdown.map((item, index) => (
                <Link
                  key={index}
                  className="text-lg font-bold text-foreground hover:text-secondary transition-all duration-300"
                  href={item.href}
                >
                  {item.link}
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default NavItem;
