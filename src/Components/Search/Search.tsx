import s from "./Search.module.css";
type Props = {
  search: (event: any) => void;
};
export function Search({ search }: Props) {
  return (
    <div className={s.searchBar}>
      <input
        className={s.input}
        placeholder="search ur emoji"
        onChange={search}
        type="text"
      />
    </div>
  );
}
