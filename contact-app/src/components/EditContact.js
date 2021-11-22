import React, { useEffect, useState } from "react";
import { getOneContact } from "../services/getOneContact";

// style
import styles from "./EditContact.module.css";

const EditContact = ({ editContactHandler, history, match}) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    if (!contact.name || !contact.email) {
      event.preventDefault();
      alert("all fields are mandatory!");
      return;
    }
    event.preventDefault();
    editContactHandler(contact,match.params.id);
    setContact({ name: "", email: "" });
    history.push("/contact-list")
  };

  useEffect(()=>{
      const localFetch = async () => {
          try {
            const {data} = await getOneContact(match.params.id);
            setContact({name: data.name, email: data.email})
          } catch (error) {
              
          }
      }
      localFetch();
  },[])

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
            Update Contact
        </button>
      </form>
    </>
  );
};

export default EditContact;