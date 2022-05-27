import s from "./Cards.module.css";
import type { Emoji } from "../../App";
type Props = Emoji;
export function Card({ symbol, keywords, title }: Props) {
  return (
    <div className={s.card}>
      <p className={s.symbol}>{symbol}</p>
      <h2 className={s.title}>{title}</h2>
      <p className={s.keywords}>{keywords}</p>
    </div>
  );
}
