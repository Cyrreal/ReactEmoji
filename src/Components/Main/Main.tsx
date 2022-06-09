import type { Emoji } from "../../App";
import { Card } from "../Cards";
import s from "./Main.module.css";

type Props = {
  emojiList: Emoji[];
};

export function Main({ emojiList }: Props) {
  return (
    <main>
      <div className={s.wrapper}>
        {emojiList.map((elem) => (
          <Card {...elem} key={elem.title} />
        ))}
      </div>
    </main>
  );
}
