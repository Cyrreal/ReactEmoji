import { useState } from "react";
import { useEventListenner } from "./UseEventListenner";
export function UseWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const changeSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEventListenner(changeSize);

  return windowSize;
}
