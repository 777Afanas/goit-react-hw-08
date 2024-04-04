import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors"; 
import { changeFilter } from "../../redux/filters/slice"; 
import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox() {
  const elementId = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.SearchBar}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.textInput}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        id={elementId}
        placeholder="Search"
      />
    </div>
  );
}
