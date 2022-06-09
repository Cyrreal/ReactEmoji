import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.flex}>
        <h2 className={s.title}>Emoji Finder</h2>
        <p className={s.subtitle}>Find Emoji by keywords</p>
      </div>
    </header>
  );
}
