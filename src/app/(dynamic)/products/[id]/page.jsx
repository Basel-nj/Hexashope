import Image from "next/image";
import style from "../../styles/product.module.css";
import AddToCart from "@/elements/Buttons/AddToCart";

async function getProductId(id) {
   const res = await fetch(`https://dummyjson.com/products/${id}`);

   if (!res.ok) {
      throw new Error("Couldn't get product");
   }

   return res.json();
}

export async function generateMetadata({ params }) {
   const productId = await getProductId(params.id);
   return {
      title: productId.title,
      description: productId.description,
   };
}

export default async function Product({ params }) {
   const productId = await getProductId(params.id);

   return (
      <div className={style.container}>
         <header className={style.header}>
            <div className={style.info}>
               <h1 className={style.title}>{productId.title}</h1>
               <p className={style.desc}>{productId.description}</p>
            </div>
            <div className={style.imageContainer}>
               <Image
                  src={productId.thumbnail}
                  className={style.image}
                  alt=""
                  width={900}
                  height={300}
               />
               <span className={style.author}>{productId.brand}</span>
            </div>
         </header>
         <div className={style.content}>
            <div className={style.gallery}>
               {productId.images.map((image, index) => {
                  return (
                     <Image
                        key={index}
                        src={image}
                        width={100}
                        height={100}
                        alt={productId.title + " " + index}
                     />
                  );
               })}
            </div>
            <div className={style.texContainer}>
               <p className={style.text}>
                  Discover the perfect blend of quality, style, and
                  functionality with our <span>{productId.title}</span>. From
                  its exquisite design to its exceptional features, this product
                  is meticulously crafted to exceed your expectations. Explore
                  the intricate details and superior craftsmanship that make our{" "}
                  <span>{productId.title}</span> a must-have for those who
                  appreciate the finer things in life. Elevate your{" "}
                  <span>{productId.category} </span>
                  experience with this exceptional choice that embodies both
                  beauty and practicality.
               </p>
            </div>
         </div>
         <footer className={style.footer}>
            <div className={style.detailes}>
               <p className={style.price}>
                  Price : <del>{productId.price}</del> $
               </p>
               <p className={style.discount}>
                  New Price :{" "}
                  <span>
                     {(
                        productId.price -
                        (productId.price * productId.discountPercentage) / 100
                     ).toFixed(1)}
                  </span>{" "}
                  $
               </p>
            </div>
            <AddToCart productId={productId} />
         </footer>
      </div>
   );
}
