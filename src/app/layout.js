import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Montserrat, Lalezar } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { ProductsProvider } from "@/context/ProductsContext";

const bodyFont = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });

export const metadata = {
   title: "Hexashop",
   description:
      "Discover a world of endless shopping possibillities at our online store. Browse , Choose , and Order your favorite products from the comfort of your home.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={bodyFont.className}>
            <ThemeProvider>
               <ProductsProvider>
                  <div className="contanier">
                     <Navbar />
                     {children}
                     <Footer />
                  </div>
               </ProductsProvider>
            </ThemeProvider>
         </body>
      </html>
   );
}
