import s from "./Search.module.css";
type Props = {
  search: (text: string) => void;
  pageChoose: (number: number) => void;
};
export function Search({ search, pageChoose }: Props) {
  return (
    <div className={s.search}>
      <input
        className={s.input}
        placeholder="search ur emoji"
        onChange={({ target }) => {
          pageChoose(1);
          return search(target.value);
        }}
        type="text"
      />
    </div>
  );
}
