import { useState } from "react";
import { useEventListenner } from "./UseEventListenner";
export function UseWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const changeSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEventListenner("resize", changeSize);

  return windowSize;
}

// Задание:
//    Напишите кастмный хук `useEventListener`. В него можно передать событие, функцию обработчик и элемент (по умолчанию window), которая будет вызываться при срабатывании события. Не забудьте отписаться от события.
// Пример:
//    useEventListener("mousemove", (event) => {
//     // window mouse move
//    })

// Задание:
//    Используя хук useEventListener, реализуйте хук useOnline. Который будет возвращать true/false в зависимости от того, есть ли у пользователя интернет.
// Подсказка:
//    https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine
// Пример:
//    const isOnline = useOnline();

// Задание:
//    Используя хук useEventListener, реализуйте хук useWindowSize. Который будет возвращать размеры окна. Не забудьте что размеры окна могут меняться.
// Пример:
//    const [width, height] = useWindowSize();
