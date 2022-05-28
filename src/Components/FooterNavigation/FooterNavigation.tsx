import type { Emoji } from "../../App";
import s from "./FooterNavigation.module.css";

type Props = {
  maxIndex: number;
  currentPage: number;
  startPage: number;
  endPage: number;
  emojiPerPage: number;
  allEmoji: Emoji[];
  pageChoose: (PageNumber: number) => void;
  selectPerPage: (perPage: number) => void;
};

export function FooterNavigation({
  maxIndex,
  currentPage,
  startPage,
  endPage,
  pageChoose,
  selectPerPage,
}: Props) {
  const pageNumbers: number[] = [];
  const selectItems: number[] = [12, 24, 48];

  for (let i = 1; i <= maxIndex; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={s.nav}>
        {currentPage === 1 ? (
          <button
            disabled={true}
            className={`${s.button} ${s.inactive}`}
            onClick={() => pageChoose(pageNumbers[pageNumbers[0] - 1])}
          >
            First
          </button>
        ) : (
          <button
            className={`${s.button} ${s.inactive} ${s.hover}`}
            onClick={() => pageChoose(pageNumbers[pageNumbers[0] - 1])}
          >
            First
          </button>
        )}
        {pageNumbers.slice(startPage, endPage).map((number) => (
          <button
            className={
              currentPage === number
                ? `${s.button} ${s.hover} ${s.active}`
                : `${s.button} ${s.hover}`
            }
            key={number}
            onClick={() => pageChoose(number)}
          >
            {number}
          </button>
        ))}
        {currentPage === maxIndex ? (
          <button
            disabled={true}
            className={`${s.button} ${s.inactive}`}
            onClick={() => pageChoose(pageNumbers.length)}
          >
            Last
          </button>
        ) : (
          <button
            className={`${s.button} ${s.inactive} ${s.hover}`}
            onClick={() => pageChoose(pageNumbers.length)}
          >
            Last
          </button>
        )}
      </div>
      <div className={s.drop}>
        <p>Per page</p>
        <select
          className={s.select}
          onChange={({ target }) => selectPerPage(+target.value)}
        >
          {selectItems.map((number, index) => (
            <option key={index} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
