import s from "./Cards.module.css";
import { EmojiType } from "../../App";
type Props = {
  symbol: string;
  keywords: string;
  title: string;
};
export function Cards({ symbol, keywords, title }: Props) {
  return (
    <div className={s.cardItem}>
      <p className={s.symbol}>{symbol}</p>
      <h2 className={s.title}>{title}</h2>
      <p className={s.keywords}>{keywords}</p>
    </div>
  );
}
