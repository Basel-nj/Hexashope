import RemoveFromCart from "@/elements/Buttons/RemoveFromCart";
import Image from "next/image";
import Link from "next/link";
import style from "./card.module.css";
import { useEffect, useState } from "react";

export default function Card({ product, onChildRender }) {
   const [count, setCount] = useState(
      localStorage.getItem(`product_${product.id}_price`)
         ? JSON.parse(localStorage.getItem(`product_${product.id}_price`)).count
         : 1
   );
   const [price, setPrice] = useState(
      localStorage.getItem(`product_${product.id}_price`)
         ? JSON.parse(localStorage.getItem(`product_${product.id}_price`)).price
         : 0
   );
   const calcPrice = () => {
      let price = (
         (product.price - (product.price * product.discountPercentage) / 100) *
         count
      ).toFixed(1);
      return price;
   };

   const setPriceInLocalStorage = () => {
      localStorage.setItem(
         `product_${product.id}_price`,
         JSON.stringify({
            price: calcPrice(),
            count: count,
         })
      );
   };

   useEffect(() => {
      setPriceInLocalStorage();
      let price = JSON.parse(
         localStorage.getItem(`product_${product.id}_price`)
      ).price;
      setPrice(+price);
      let count = JSON.parse(
         localStorage.getItem(`product_${product.id}_price`)
      ).count;
      setCount(+count);
      onChildRender();
   }, [count]);

   return (
      <div className={style.card} key={product.id}>
         <Link
            href={`/products/${product.id}`}
            className={style.imageContainer}
         >
            <Image
               src={product.thumbnail}
               fill={true}
               alt="product Image"
               className={style.image}
            />
         </Link>
         <div className={style.detailes}>
            <div className={style.text}>
               <h1 className={style.title}>{product.title}</h1>
               <p className={style.description}>{product.description}</p>
            </div>
            <div className={style.info}>
               <p className={style.price}>
                  Price : <span>{price}</span> $
               </p>
               <div className={style.count}>
                  <span
                     className={style.increase}
                     onClick={() => setCount(count + 1)}
                  ></span>
                  <span>{count}</span>
                  <span
                     className={style.decrease}
                     onClick={() => count >= 2 && setCount(count - 1)}
                  ></span>
               </div>
               <RemoveFromCart product={product} />
            </div>
         </div>
      </div>
   );
}
