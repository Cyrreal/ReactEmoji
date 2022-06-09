import type { Emoji } from "../../App";
import { FooterNavigation } from "../FooterNavigation";
import s from "./Footer.module.css";

type Props = {
  emojiPerPage: number;
  currentPage: number;
  allEmoji: Emoji[];
  pageChoose: (pageNumber: number) => void;
  selectPerPage: (perPage: number) => void;
};
export function Footer({
  pageChoose,
  emojiPerPage,
  allEmoji,
  selectPerPage,
  currentPage,
}: Props) {
  const maxIndex = Math.ceil(allEmoji.length / emojiPerPage);
  let startPage = 0;
  let endPage = 0;

  //Если при нахождении на последней странице переключается количество отображаемых элементов на странице
  // if (
  //   (emojiPerPage === 24 && currentPage === 152) ||
  //   (emojiPerPage === 48 && currentPage === 76)
  //   //для перехода с 12 на 24 и 48
  // ) {
  //   pageChoose(currentPage / 2);
  // } else if (emojiPerPage === 48 && currentPage === 152) {
  //   pageChoose(currentPage / 4);
  // } else if (
  //   (emojiPerPage === 12 && currentPage === 76) ||
  //   (emojiPerPage === 24 && currentPage === 38)
  // ) {
  //   pageChoose(currentPage * 2);
  // } else if (emojiPerPage === 12 && currentPage === 38) {
  //   pageChoose(currentPage * 4);
  // }

  if (currentPage === 1 || currentPage === 2) {
    startPage = 0;
    endPage = 5;
  } else if (
    currentPage === maxIndex ||
    currentPage === maxIndex - 1 ||
    currentPage === maxIndex - 2
  ) {
    startPage = maxIndex - 5;
    endPage = maxIndex;
  } else if (currentPage > 2) {
    startPage = currentPage - 3;
    endPage = currentPage + 2;
  }

  return (
    <footer className={s.wrapper}>
      <div className={s.footer}>
        <div className={s.nav}>
          <FooterNavigation
            maxIndex={maxIndex}
            currentPage={currentPage}
            startPage={startPage}
            endPage={endPage}
            pageChoose={pageChoose}
            emojiPerPage={emojiPerPage}
            allEmoji={allEmoji}
            selectPerPage={selectPerPage}
          />
        </div>
      </div>
    </footer>
  );
}
