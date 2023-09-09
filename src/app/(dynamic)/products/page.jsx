import Link from "next/link";
import style from "./products.module.css";
import Image from "next/image";
import { Fragment } from "react";
import Search from "@/elements/Search/Search";

export const metadata = {
   title: "Hexashop - Products",
   description:
      "Discover a world of endless shopping possibillities at our online store.",
};

export async function getData() {
   const res = await fetch("https://dummyjson.com/products");

   if (!res.ok) {
      throw new Error("Error fetching data");
   }

   return res.json();
}

export default async function Products() {
   const productsData = await getData();
   const products = productsData.products;

   const filtered = () => {};

   return (
      <Fragment>
         <Search data={products} />
         <div className={style.mainContainer}>
            {products.map((product) => {
               return (
                  <Link
                     href={`/products/${product.id}`}
                     key={product.id}
                     className={style.post}
                  >
                     <div className={style.imageContainer}>
                        <Image
                           src={product.thumbnail}
                           fill={true}
                           sizes="100"
                           className={style.image}
                           alt="post image"
                        />
                     </div>
                     <div className={style.content}>
                        <h1 className={style.title}>{product.title}</h1>
                        <p className={style.text}> {product.description}</p>
                     </div>
                  </Link>
               );
            })}
         </div>
      </Fragment>
   );
}
