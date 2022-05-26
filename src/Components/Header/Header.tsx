import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.headerFlex}>
        <h2 className={s.headerTitle}>Emoji Finder</h2>
        <p className={s.headerSubtitle}>Find Emoji by keywords</p>
      </div>
    </header>
  );
}
