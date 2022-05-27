import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import { RemoveDuplicates } from "./RemoveDuplicates";
import "./App.css";

export type Emoji = {
  keywords: string;
  title: string;
  symbol: string;
};

function App() {
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1); //Стейт для выбранной страницы
  const [emojiPerPage, setEmojiPerPage] = useState(12); //Стейт для колличества отображаемых элементов
  const [fetchData, setFetchData] = useState<Emoji[]>([]); //Стейт для объекта полученного с API и дальнейшего с ним взаимодействия

  //Запрос данный с API
  useEffect(() => {
    fetch("https://emoji.ymatuhin.workers.dev/")
      .then((res) => res.json())
      .then((data) => setFetchData(RemoveDuplicates(data)));
  }, []);
  //Поиск
  const filteredEmoji = fetchData.filter((elem) => {
    const fullSearch = value.split(" ");
    return fullSearch.every(
      (word) =>
        elem.keywords.toLowerCase().includes(word.toLowerCase()) ||
        elem.title.toLowerCase().includes(word.toLowerCase())
    );
  });
  //Константы для пагинации и выбора колличиства отображаемых карточек
  const lastEmojiPageIndex = currentPage * emojiPerPage;
  const firstEmojiPageIndex = lastEmojiPageIndex - emojiPerPage;
  const emojiList = filteredEmoji.slice(
    firstEmojiPageIndex,
    lastEmojiPageIndex
  );

  return (
    <>
      <Header />
      <Search search={setValue} pageChoose={setCurrentPage} />
      <Main emojiList={emojiList} />
      <Footer
        currentPage={currentPage}
        pageChoose={setCurrentPage}
        emojiPerPage={emojiPerPage}
        allEmoji={filteredEmoji}
        selectPerPage={setEmojiPerPage}
      />
    </>
  );
}

export default App;
