"use client";

import Link from "next/link";
import style from "./Navbar.module.css";
import { links } from "./links";
import Logo from "@/elements/Logo/Logo";
import DarkModeToggle from "../Dark-mode-toggle/DarkModeToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
   const pathname = usePathname();

   return (
      <div className={style.container}>
         <Logo />

         <div className={style.links}>
            <DarkModeToggle />
            {links.map((link) => {
               const isActive = pathname === link.url;
               return (
                  <Link
                     key={link.id}
                     href={link.url}
                     className={isActive ? style.active : style.notActive}
                  >
                     {link.title}
                  </Link>
               );
            })}
         </div>
      </div>
   );
}
