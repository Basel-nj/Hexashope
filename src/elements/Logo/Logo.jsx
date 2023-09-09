import Link from "next/link";
import style from "./logo.module.css";
import { Lobster } from "next/font/google";

const logoFont = Lobster({ subsets: ["latin"], weight: ["400"] });

export default function Logo() {
   return (
      <Link href="/" className={`${style.logo} ${logoFont.className}`}>
         HEXASHOP
      </Link>
   );
}
