import css from "./PageTitle.module.css";


export default function PageTitle({ children }) {
  return <h2 className={css.heading}>{children}</h2>;
}