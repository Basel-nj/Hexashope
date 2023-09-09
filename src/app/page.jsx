import Image from "next/image";
import style from "./page.module.css";
import Hero from "/public/images/hero.svg";
import Link from "next/link";

export const metadata = {
   title: "Hexashop - Home",
   description:
      "Discover a world of endless shopping possibillities at our online store. Browse , Choose , and Order your favorite products from the comfort of your home.",
};

export default function Home() {
   return (
      <div className={style.container}>
         <div className={style.col}>
            <h1 className={style.title}>You Best Online Shop Destination!</h1>
            <p className={style.description}>
               Discover a world of endless shopping possibillities at our online
               store. Browse , Choose , and Order your favorite products from
               the comfort of your home.
            </p>
            <Link href={"/products"} className={style.button}>
               Shop show
            </Link>
         </div>
         <div className={style.col}>
            <Image src={Hero} className={style.hero} alt="HERO" />
         </div>
      </div>
   );
}
