"use client";
import style from "./Button.module.css";
import { useContext, useEffect, useState } from "react";

import { ProductsContext } from "@/context/ProductsContext";

export default function AddToCart({ productId }) {
   const { products, addProduct } = useContext(ProductsContext);
   const [productsIds, setProductsIds] = useState([]);

   useEffect(() => {
      products.map((product) => {
         setProductsIds((prev) => {
            return [...prev, product.id];
         });
      });
   }, [products]);

   return (
      <div
         className={style.buy}
         onClick={() => addProduct(productId)}
         style={
            productsIds.includes(productId.id)
               ? { cursor: "not-allowed" }
               : null
         }
      >
         {productsIds.includes(productId.id) ? "Added" : " Add To Carts"}
      </div>
   );
}
