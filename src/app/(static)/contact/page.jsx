import Image from "next/image";
import style from "../styles/contact.module.css";
import contact from "/public/images/contact.svg";
import { addresses } from "../../../elements/Address/addresses";

export const metadata = {
   title: "Hexashop - Contact",
   description:
      "Discover a world of endless shopping possibillities at our online store.",
};

export default function Contact() {
   return (
      <div className={style.container}>
         <div className={style.contactLogo}>
            <h1>Get in Touch</h1>
            <Image src={contact} alt="" className={style.image} />
         </div>
         <div className={style.contact}>
            {addresses.map((address) => {
               return (
                  <div className={style.section} key={address.address}>
                     <div className={style.icon}>
                        <Image
                           src={`/images/icon/${address.address.toLowerCase()}.png`}
                           width={50}
                           height={50}
                           alt=""
                        />
                     </div>
                     <div className={style.detailes}>
                        <h2>{address.address}</h2>
                        <p>{address.detailes}</p>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
