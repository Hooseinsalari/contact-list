import React from "react";

// style
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
    
  return (
    <div>
      {contacts.map((item) => {
          const {name, email, id} = item;
        return (
            <div key={id} className={styles.container}>
                <div className={styles.value}>
                <p>name: {name}</p>
                <p>email: {email}</p>
                </div>
                <button className={styles.deleteBtn} onClick={() => onDelete(id)}>delete</button>
            </div>
            );
        
      })}
    </div>
  );
};

export default ContactList;
