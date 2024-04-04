import { Toaster } from "react-hot-toast";
import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
      <Toaster reverseOrder={false} />
    </div>
  );
}