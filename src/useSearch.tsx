import { useState } from "react";
import { Emoji } from "./App";
export function useSearch(arg: any) {
  const [searchValue, setSearchValue] = useState("");
  //   const fetchData = useFetchHook();
  const filteredEmoji: any = arg.filter((elem: any) => {
    const fullSearch = searchValue.split(" ");
    return fullSearch.every(
      (word) =>
        elem.keywords.toLowerCase().includes(word.toLowerCase()) ||
        elem.title.toLowerCase().includes(word.toLowerCase())
    );
  });
  return { filteredEmoji: filteredEmoji, setSearchValue: setSearchValue };
}
