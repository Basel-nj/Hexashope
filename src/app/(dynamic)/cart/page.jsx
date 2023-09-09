"use client";
import style from "../styles/cart.module.css";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import Card from "@/components/Card/Card";
import Head from "next/head";

export default function Profile() {
   const [productsCart, setProductsCart] = useState([]);
   const { products } = useContext(ProductsContext);
   const [allPrices, setAllPrices] = useState(0);
   const [childRenderCount, setChildRenderCount] = useState(0);

   useEffect(() => {
      if (localStorage.getItem("products")) {
         const allProducts = localStorage.getItem("products");
         setProductsCart(JSON.parse(allProducts));
      }
   }, [products]);

   const getAllPricesFromLocalStorage = () => {
      const allPrices = [];
      for (let i = 0; i < localStorage.length; i++) {
         const key = localStorage.key(i);
         if (key.includes("_price")) {
            const price = JSON.parse(localStorage.getItem(key)).price;
            allPrices.push(+price);
         }
      }

      let sum = 0;

      allPrices.forEach((element) => {
         sum += element;
      });
      return sum.toFixed(1);
   };

   useEffect(() => {
      if (childRenderCount > 0) {
         setAllPrices(getAllPricesFromLocalStorage());
      }
   }, [childRenderCount, products]);

   return (
      <Fragment>
         <Head>
            <title>Hexashop - cartdd</title>
         </Head>
         {productsCart.length !== 0 && (
            <header className={style.header}>
               Totla Price of all Products : <span> {allPrices} $ </span>
            </header>
         )}
         <div className={style.container}>
            {productsCart.length === 0 ? (
               <div className={style.noProducts}>
                  <p>
                     There is no products , Go to
                     <Link href={"/products"} className={style.link}>
                        {"  "} OUR SHOP{"  "}
                     </Link>
                     and add some products
                  </p>
               </div>
            ) : (
               <Fragment>
                  {productsCart.map((product) => {
                     return (
                        <Card
                           key={product.id}
                           product={product}
                           onChildRender={() =>
                              setChildRenderCount((prevCount) => prevCount + 1)
                           }
                        />
                     );
                  })}
               </Fragment>
            )}
         </div>
      </Fragment>
   );
}
