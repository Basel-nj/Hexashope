"use client";
import style from "./Button.module.css";
import { useContext } from "react";

import { ProductsContext } from "@/context/ProductsContext";

export default function RemoveFromCart({ product }) {
   const { removeProduct } = useContext(ProductsContext);

   return (
      <button className={style.remove} onClick={() => removeProduct(product)}>
         Remove
      </button>
   );
}
