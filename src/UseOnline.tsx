import { useEventListenner } from "./UseEventListenner";
import { useState } from "react";
export function UseOnline() {
  const [network, setNetwork] = useState(navigator.onLine);
  // const isOnline=()=>{
  //   if (navigator.onLine) {
  //     return
  //   } else {
  //     return "offline";
  //   }
  {
  }
  // }
  useEventListenner("online", () => setNetwork(navigator.onLine));
  useEventListenner("offline", () => setNetwork(navigator.onLine));
  return network;
}
