import css from "./ContactList.module.css";
import Contact from "../Contact/Contact"; 
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";


export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);

   
    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li key={contact.id} className={css.contactListItem}>
                    <Contact info={contact} />
                </li>
            ))}
        </ul>
    );
}