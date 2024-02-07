import Link from "next/link";
import React from "react";
import FacebookIcon from "@/assets/svgs/facebook";
import InstagramIcon from "@/assets/svgs/instagram";
import LinkedinIcon from "@/assets/svgs/linkedin";
import TwitterIcon from "@/assets/svgs/twitter";
import YoutubeIcon from "@/assets/svgs/youtube";
import { cn } from "@/lib/utils";

const SocialLinks = ({
  className,
  Iconsizes,
}: {
  className?: string;
  Iconsizes?: number;
}) => {
  return (
    <div className={cn([className, "flex items-center gap-4"])}>
      <Link
        href={"/"}
        className="fill-white hover:fill-primary transition-all duration-300"
      >
        <InstagramIcon size={Iconsizes} className="max-sm:w-[20px]" />
      </Link>
      <Link
        href={"/"}
        className="fill-white hover:fill-primary transition-all duration-300"
      >
        <FacebookIcon size={Iconsizes} className="max-sm:w-[20px]" />
      </Link>
      <Link
        href={"/"}
        className="fill-white hover:fill-primary transition-all duration-300"
      >
        <LinkedinIcon size={Iconsizes} className="max-sm:w-[20px]" />
      </Link>
      <Link
        href={"/"}
        className="fill-white hover:fill-primary transition-all duration-300"
      >
        <TwitterIcon size={Iconsizes} className="max-sm:w-[20px]" />
      </Link>
      <Link
        href={"/"}
        className="fill-white hover:fill-primary transition-all duration-300"
      >
        <YoutubeIcon size={Iconsizes} className="max-sm:w-[20px]" />
      </Link>
    </div>
  );
};

export default SocialLinks;
