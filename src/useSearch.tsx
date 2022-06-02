import { useState } from "react";
import { Emoji } from "./App";
export function useSearch(fetchData: Emoji[]) {
  const [searchValue, setSearchValue] = useState("");
  //   const fetchData = useFetchHook();
  const filteredEmoji: any = fetchData.filter((elem: any) => {
    const fullSearch = searchValue.split(" ");
    return fullSearch.every(
      (word) =>
        elem.keywords.toLowerCase().includes(word.toLowerCase()) ||
        elem.title.toLowerCase().includes(word.toLowerCase())
    );
  });
  return { filteredEmoji: filteredEmoji, setSearchValue: setSearchValue };
}
