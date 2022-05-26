import "./App.css";
import { emojiData } from "./Components/Emoji";
import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer/Footer";
import { ChangeEvent, useEffect, useState } from "react";

export type EmojiType = typeof emojiData;

export type Emoji = {
  keywords: string;
  title: string;
  symbol: string;
};

function App() {
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [emojiPerPage, setemojiPerPage] = useState(12);
  const [fetchData, setFetchData] = useState<Emoji[]>([]);

  useEffect(() => {
    fetch("https://emoji.ymatuhin.workers.dev/")
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  const sort = fetchData.map((elem) => {
    if (elem.keywords) {
      let res = elem.keywords.split(" ");
      res = [...(new Set(res) as any)];
      elem.keywords = res.join(" ");
    }
    return elem;
  });

  const filteredEmoji = sort.filter((elem) => {
    let fullSearch = value.split(" ");
    return fullSearch.every(
      (word) =>
        elem.keywords.toLowerCase().includes(word.toLowerCase()) ||
        elem.title.toLowerCase().includes(word.toLowerCase())
    );
  });

  const lastEmojiPageIndex = currentPage * emojiPerPage;
  const firstEmojiPageIndex = lastEmojiPageIndex - emojiPerPage;

  const currentEmoji = filteredEmoji.slice(
    firstEmojiPageIndex,
    lastEmojiPageIndex
  );

  const pageChoose = (pageNumber: number) => setCurrentPage(pageNumber);
  const changeSelect = (event: any) => setemojiPerPage(event.target.value);
  const searchValue = (event: any) => setValue(event.target.value);
  let startPage = 0;
  let endPage = 5;

  if (currentPage === 1 || currentPage === 2) {
    startPage = 0;
    endPage = 5;
  } else if (currentPage > 2) {
    startPage = currentPage - 3;
    endPage = currentPage + 2;
  }

  return (
    <>
      <Header />
      <Search search={searchValue} />
      <Main currentEmoji={currentEmoji} />
      <Footer
        startPage={startPage}
        endPage={endPage}
        pageChoose={pageChoose}
        emojiPerPage={emojiPerPage}
        allEmoji={filteredEmoji}
        selectPerPage={changeSelect}
      />
    </>
  );
}

export default App;
