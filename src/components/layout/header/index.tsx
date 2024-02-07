import Link from "next/link";
import React from "react";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
import SearchIcon from "@/assets/svgs/search";
import { Button } from "@/components/ui/button";
import NavItem from "@/components/nav-Item";
import MobileMenu from "./mobileMenu";
import SocialLinks from "./socialLinks";
import Search from "@/components/search";

const Header = () => {
  return (
    <header className="relative w-full flex flex-col justify-center">
      <div className="min-h-[72px] relative w-full lg:bg-foreground bg-[#0d161e] flex items-center justify-between py-2 xl:px-16 sm:px-8 px-2.5">
        {/* Social Icons */}
        <div className="max-lg:hidden">
          <SocialLinks />
        </div>
        {/* Logo */}
        <Link href={"/"} className="max-sm:ml-2">
          <Image className="max-sm:max-w-[90px] hover:scale-[1.02] transition-all duration-300" src={Logo} alt="Logo" />
        </Link>
        {/* Buttons */}
        <div className="flex items-center gap-5 max-lg:hidden">
          {/* Search */}
          <Search />
          <Button size={"lg"} variant={"secondary"}>
            Support Us
          </Button>
          <Link href={"/login"} className="text-lg font-bold text-white">
            Login
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex justify-center border-b border-secondary max-lg:hidden">
        <ul className="flex items-center gap-9">
          {NavItems.map((item, index) => (
            <li key={index}>
              <NavItem
                text={item.text}
                href={item.href}
                dropdown={item.dropdown}
              />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export const NavItems = [
  {
    text: "News",
    href: "/news",
  },
  {
    text: "Indie Publisher",
    href: "/indie-publisher",
  },
  {
    text: "Community Voices",
    href: "/",
    dropdown: [
      {
        link: "Rachel Chen",
        href: "/",
      },
      {
        link: "Robin Parelle",
        href: "/",
      },
      {
        link: "Ramona Wildeman",
        href: "/",
      },
    ],
  },
  {
    text: "Newsletter",
    href: "/newsletter",
  },
  {
    text: "Events",
    href: "/events",
  },
  {
    text: "About Us",
    href: "/",
    dropdown: [
      {
        link: "Our Team",
        href: "/",
      },
      {
        link: "Contact Us",
        href: "/",
      },
      {
        link: "Advertise With Us",
        href: "/",
      },
    ],
  },
];

export default Header;
