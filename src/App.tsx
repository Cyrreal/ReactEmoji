import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer/Footer";
import { UseWindowSize } from "./useWindowSize";
import { useFetchHook } from "./useFetchHook";
import { useSearch } from "./useSearch";
import { usePagination } from "./usePagination";
import { useEventListenner } from "./UseEventListenner";
import { UseOnline } from "./UseOnline";
import "./App.css";
export type Emoji = {
  keywords: string;
  title: string;
  symbol: string;
};

function App() {
  //Запрос данных с API
  const fetchData = useFetchHook(); //Стейт для объекта полученного с API и дальнейшего с ним взаимодействия
  //Поиск
  const { filteredEmoji, setSearchValue } = useSearch(fetchData);
  //Константы для пагинации и выбора колличиства отображаемых карточек
  const {
    currentPage,
    setCurrentPage,
    emojiPerPage,
    setEmojiPerPage,
    emojiList,
  } = usePagination(filteredEmoji);

  // console.log(UseOnline());

  // const castomHook = UseWindowSize();
  // console.log(castomHook);

  return (
    <>
      <Header />
      <Search search={setSearchValue} pageChoose={setCurrentPage} />
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
