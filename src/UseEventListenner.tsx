import { useEffect } from "react";
import { UseOnline } from "./UseOnline";
import { UseWindowSize } from "./useWindowSize";
export function useEventListenner(func: any) {
  useEffect(() => {
    document.addEventListener("mousemove", func);
    return () => document.removeEventListener("mousemove", func);
  }, []);
}

// useEffect(() => {
//     document.addEventListener("scroll", scrollPage);
//     return () => document.removeEventListener("scroll", scrollPage);
//   }, []);
//   const scrollPage = () => {
//     console.log("Я работаю!");
//   };
