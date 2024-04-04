import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contactsOps";
import ErrorToast from "../Toast/ErrorToast";
import SuccessToast from "../Toast/SuccessToast";
import { Toaster } from "react-hot-toast";


const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Shart!")
        .max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
        .min(3, "Too Shart!")
        .max(50, "Too Long!")
        .required("Required"),
});

const initialValues = {
    name: "",
    number: "",
};

export default function ContactForm() {
    const elementId = useId();
    // const numberFieldId = useId();
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    // const handleSubmit = (values, actions) => {
    //     dispatch(
    //         addContact({                 
    //             name: values.name,
    //             number: values.number,
    //         })
    //     );
    //     actions.resetForm();
    // }; 

     const handlerSubmit = (values, action) => {
    if (
      contacts.find(
        (contact) =>
          contact.name.toLowerCase() === values.name.toLowerCase() ||
          contact.number === values.number
      )
    ) {
      action.resetForm();
      return ErrorToast("Error! Try again");
    }
    dispatch(addContact(values))
      .unwrap()
      .then(() => SuccessToast("Contact added successfully!"));
    action.resetForm();
  };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handlerSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={css.form}>
                <div className={css.box}>
                    <label className={css.label} htmlFor={elementId + "-name"}>
                        Name
                    </label>
                    <Field
                        className={css.field}
                        type="text"
                        name="name"
                        id={elementId + "-name"}
                    />
                    <ErrorMessage className={css.error} name="name" as="span" />
                </div>
                <div className={css.box}>
                    <label className={css.label} htmlFor={elementId + "-number"}>
                        Number
                    </label>
                    <Field
                        className={css.field}
                        type="tel"
                        name="number"
                        id={elementId + "-number"}
                    />
                    <ErrorMessage className={css.error} name="number" as="span" />
                </div>

                <button className={css.button} type="submit">
                    Add contact
                </button>
                <Toaster />
            </Form>
        </Formik>
    );
}