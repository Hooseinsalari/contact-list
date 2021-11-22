import React, { useEffect, useState } from "react";
import { getContacts } from "../services/getAllContacts";
import { getOneContact } from "../services/getOneContact";
import { putContant } from "../services/putContantService";

// style
import styles from "./EditContact.module.css";

const EditContact = ({ history, match}) => {
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
      await putContant(match.params.id, contact);
      await getContacts(match.params.id, contact);
      setContact({ name: "", email: "" });
      history.push("/contact-list")
    } catch (error) {
      
    }
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