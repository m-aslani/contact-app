import { useState } from "react";
import styles from "./Contact.module.css";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";

import {v4} from "uuid"; 

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [alert, setAlert] = useState("");

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastname ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please fill the inputs!");
    } else {
        const newContact = {... contact, id: v4()}
        setContacts((contacts) => [...contacts, newContact]);
        setAlert("");
        setContact({
            id: "",
            name: "",
            lastname: "",
            email: "",
            phone: "",
        });
    }
  };

  const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert} >{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler = {deleteHandler} />
    </div>
  );
}

export default Contact;
