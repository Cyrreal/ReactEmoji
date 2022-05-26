import s from "./Footer.module.css";
import { FooterNavigation } from "../FooterNavigation";
import { EmojiType } from "../../App";

type Props = {
  startPage: number;
  endPage: number;
  pageChoose: (PageNumber: number) => void;
  emojiPerPage: number;
  allEmoji: EmojiType;
  selectPerPage: (event: any) => void;
};
export function Footer({
  startPage,
  endPage,
  pageChoose,
  emojiPerPage,
  allEmoji,
  selectPerPage,
}: Props) {
  return (
    <footer className={s.footerWrapper}>
      <div className={s.footer}>
        <div className={s.footerNav}>
          <FooterNavigation
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
