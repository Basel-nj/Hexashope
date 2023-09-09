"use client";
import { useContext } from "react";
import style from "./darkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkModeToggle() {
   const { mode, toggle } = useContext(ThemeContext);

   return (
      <div className={style.container} onClick={toggle}>
         <div className={style.icon}>🌙</div>
         <div className={style.icon}>🌚</div>
         <div
            className={style.switcher}
            style={mode === "light" ? { left: "2px" } : { right: "2px" }}
         />
      </div>
   );
}
