import Image from "next/image";
import style from "./footer.module.css";
import { icons } from "./icons";
export default function Footer() {
   return (
      <div className={style.container}>
         <div>&copy; HEXASHOP , All Rights Reserved </div>
         <div className={style.social}>
            {icons.map((icon) => {
               return (
                  <Image
                     key={icon.id}
                     src={`/images/icon/${icon.media}.png`}
                     width={30}
                     height={30}
                     alt={`HEXASHOP  ${icon.media} link  `}
                  />
               );
            })}
         </div>
      </div>
   );
}
