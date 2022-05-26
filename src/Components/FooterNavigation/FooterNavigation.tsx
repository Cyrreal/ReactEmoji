import s from "./FooterNavigation.module.css";
import { EmojiType } from "../../App";

type Props = {
  startPage: number;
  endPage: number;
  pageChoose: (PageNumber: number) => void;
  emojiPerPage: number;
  allEmoji: EmojiType;
  selectPerPage: (event: any) => void;
};

export function FooterNavigation({
  startPage,
  endPage,
  emojiPerPage,
  allEmoji,
  pageChoose,
  selectPerPage,
}: Props) {
  const pageNumbers: number[] = [];
  const selectItems: number[] = [12, 24, 48];

  for (let i = 1; i <= Math.ceil(allEmoji.length / emojiPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={s.nav}>
        <button
          className={`${s.button} ${s.inactive}`}
          onClick={() => pageChoose(pageNumbers[pageNumbers[0] - 1])}
        >
          First
        </button>
        {pageNumbers.slice(startPage, endPage).map((number) => (
          <button
            className={s.button}
            key={number}
            onClick={() => pageChoose(number)}
          >
            {number}
          </button>
        ))}
        <button
          className={`${s.button} ${s.inactive}`}
          onClick={() => pageChoose(pageNumbers.length)}
        >
          last
        </button>
      </div>
      <div className={s.nav}>
        <p>Per pgae</p>
        <select className={s.select} onChange={selectPerPage}>
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
