import { useEffect } from "react";
import { UseOnline } from "./UseOnline";
import { UseWindowSize } from "./useWindowSize";
export function useEventListenner(
  eventName: string,
  handler: any,
  element: any = window
) {
  useEffect(() => {
    element.addEventListener(eventName, handler);
    return () => element.removeEventListener(eventName, handler);
  }, [element, eventName, handler]);
}

// Задание:
//    Напишите кастмный хук `useEventListener`. В него можно передать событие, функцию обработчик и элемент (по умолчанию window), которая будет вызываться при срабатывании события. Не забудьте отписаться от события.
// Пример:
//    useEventListener("mousemove", (event) => {
//     // window mouse move
//    })

// useEffect(() => {
//     document.addEventListener("scroll", scrollPage);
//     return () => document.removeEventListener("scroll", scrollPage);
//   }, []);
//   const scrollPage = () => {
//     console.log("Я работаю!");
//   };
