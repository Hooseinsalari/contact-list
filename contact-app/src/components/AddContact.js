import React, { useState } from "react";
import { postContact } from "../services/postContactService";

// style
import styles from "./AddContact.module.css";

const AddContact = ({ addContactHandler, history}) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };


  const submitHandler = async (event) => {
    if (!contact.name || !contact.email) {
      event.preventDefault();
      alert("all fields are mandatory!");
      return;
    }
    event.preventDefault();
    try {
      await postContact(contact)
      setContact({ name: "", email: "" });
      history.push("/contact-list")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <div className={styles.container}>
          <div className={styles.Input}>
            <label>name</label>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.Input}>
            <label>email</label>
            <input
              type="text"
              name="email"
              value={contact.email}
              onChange={changeHandler}
            />
          </div>
        </div>
    
        <button type="submit" className={styles.submitBtn}>
          submit
        </button>
      </form>
    </>
  );
};

export default AddContact;
