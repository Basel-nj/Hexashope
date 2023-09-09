import style from "./about.module.css";

export const metadata = {
   title: "Hexashop - About",
   description:
      "Discover a world of endless shopping possibillities at our online store.",
};

export default function About() {
   return (
      <div className={style.container}>
         <h1>About</h1>
         <ul>
            <li>
               Welcome to <span>Hexashop</span>, where passion meets
               craftsmanship.
            </li>

            <li>
               {" "}
               At <span>Hexashop</span>, we believe that every Product tells a
               story.
            </li>
            <li>
               {" "}
               Crafted with love and attention to detail, our products are a
               testament to our commitment.
            </li>

            <li>
               {" "}
               Our mission is to bring you Product that exceeds expectations in
               both style and quality.
            </li>
            <li>
               {" "}
               Discover the perfect blend of aesthetics and functionality in our
               meticulously designed products.
            </li>
            <li>
               {" "}
               Each item in our collection is a reflection of our dedication to
               timeless elegance and modern innovation.
            </li>

            <li>
               {" "}
               With a focus on sustainable practices, We are committed to
               reducing our environmental footprint.
            </li>
            <li>
               {" "}
               We take pride in collaborating with skilled craftsmen who share
               our passion for excellence.
            </li>
            <li>
               {" "}
               Every Product we offer is a result of countless hours of
               research, development, and refinement.
            </li>
            <li>
               Experience the difference of owning a <span>Hexashop</span>{" "}
               product – an quality piece to be treasured.
            </li>
         </ul>
      </div>
   );
}
