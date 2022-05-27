import type { Emoji } from "./App";

//Функция для удаления дубликатов из поля keywords
export function RemoveDuplicates(data: Emoji[]) {
  return data.map((elem) => {
    if (elem.keywords) {
      let res = elem.keywords.split(" ");
      res = [...(new Set(res) as any)];
      elem.keywords = res.join(" ");
    }
    return elem;
  });
}
