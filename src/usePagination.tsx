import { useState } from "react";

export function usePagination(arg: any) {
  const [currentPage, setCurrentPage] = useState(1); //Стейт для выбранной страницы
  const [emojiPerPage, setEmojiPerPage] = useState(12); //Стейт для колличества отображаемых элементов
  //Константы для пагинации и выбора колличиства отображаемых карточек
  const lastEmojiPageIndex = currentPage * emojiPerPage;
  const firstEmojiPageIndex = lastEmojiPageIndex - emojiPerPage;
  const emojiList = arg.slice(firstEmojiPageIndex, lastEmojiPageIndex);

  return {
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    emojiPerPage: emojiPerPage,
    setEmojiPerPage: setEmojiPerPage,
    emojiList: emojiList,
  };
}
