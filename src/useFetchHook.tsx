import { useState, useEffect } from "react";
import { Emoji } from "./App";
import { removeDuplicates } from "./RemoveDuplicates";
export function useFetchHook() {
  const [fetchData, setFetchData] = useState<Emoji[]>([]);
  useEffect(() => {
    fetch("https://emoji.ymatuhin.workers.dev/")
      .then((res) => res.json())
      .then((data) => setFetchData(removeDuplicates(data)));
  }, []);

  return fetchData;
}
