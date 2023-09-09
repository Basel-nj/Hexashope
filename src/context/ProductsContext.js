"use client";

import { createContext, useEffect, useState } from "react";
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
   const [products, setProducts] = useState(
      typeof localStorage !== "undefined" && localStorage.getItem("products")
         ? JSON.parse(localStorage.getItem("products"))
         : []
   );

   // --------------------------------------------------------------
   const addProduct = (product) => {
      // if (!products.includes(product)) {
      //    setProducts((prev) => [...prev, product]);
      // }
      const storedArray = JSON.parse(localStorage.getItem("products"));
      storedArray.push(product);
      const uniqueArray = [];
      const uniqueItems = new Set();

      storedArray.forEach((item) => {
         const itemString = JSON.stringify(item);
         if (!uniqueItems.has(itemString)) {
            uniqueItems.add(itemString);
            uniqueArray.push(item);
         }
      });
      localStorage.setItem("products", JSON.stringify(uniqueArray));
      setProducts(uniqueArray);
   };

   // --------------------------------------------------------------
   const removeProduct = (productRemoved) => {
      console.log("clicked");
      setProducts(
         products.filter((product) => product.id !== productRemoved.id)
      );
      localStorage.removeItem(`product_${productRemoved.id}_price`);
   };

   // --------------------------------------------------------------

   useEffect(() => {
      localStorage.setItem("products", JSON.stringify(products));
   }, [products]);

   // --------------------------------------------------------------

   return (
      <ProductsContext.Provider value={{ products, addProduct, removeProduct }}>
         {children}
      </ProductsContext.Provider>
   );
};
