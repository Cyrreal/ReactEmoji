import { useEventListenner } from "./UseEventListenner";

export function UseOnline() {
  if (navigator.onLine) {
    return "online";
  } else {
    return "offline";
  }
}
