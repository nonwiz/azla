
import Link from "next/link";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" style={{ filter: "hue-rotate(30deg)"}}/> */}
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  );
}
