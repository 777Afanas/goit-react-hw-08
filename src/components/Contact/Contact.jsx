import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps/";
import SuccessToast from "../../components/Toast/SuccessToast"

export default function Contact({ info }) {
  const dispatch = useDispatch();

  const handlerDelete = () => {
    dispatch(deleteContact(info.id))
      .unwrap()
      .then(() => SuccessToast("You delete one of the contacts!"));
  };  
    
  return (
    <div className={css.contactItem}>
      <div className={css.info}>
        <p className={css.text}>
          <FaUser />
          {info.name}
        </p>
        <p className={css.text}>
          <FaPhone />
          {info.number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={handlerDelete}
      >
        Delete
      </button>
    </div>
  );
}