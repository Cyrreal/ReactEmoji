import { Cards } from "../Cards";
import { EmojiType } from "../../App";

type Props = {
  currentEmoji: EmojiType;
};

export function Main({ currentEmoji }: Props) {
  return (
    <main>
      <div className="wrapper">
        {currentEmoji.map((elem) => (
          <Cards {...elem} key={elem.title} />
        ))}
      </div>
    </main>
  );
}
