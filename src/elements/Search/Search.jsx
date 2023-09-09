"use client";

import { useEffect, useState } from "react";

export default function Search({ data }) {
   const [term, setTerm] = useState("");
   const [filteredProducts, setFilteredProducts] = useState([]);

   useEffect(() => {
      let filtering = data.filter((product) =>
         product.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtering);
   }, [term]);

   return (
      <div>
         <input
            type="text"
            placeholder="Search ..."
            onChange={(e) => setTerm(e.target.value)}
            value={term}
         />
      </div>
   );
}
