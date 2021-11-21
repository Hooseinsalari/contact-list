import React from "react";
import { Link } from "react-router-dom";

// style
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
    
  return (
    <div>
        <h2><Link to="/">Add contact</Link></h2>
      {contacts.map((item) => {
          const {name, email, id} = item;
        return (
            <div key={id} className={styles.container}>
                <Link to={`/contact-list/:${id}`} style={{textDecoration:"none", color:"black"}}>
                    <div className={styles.value}>
                    <p>name: {name}</p>
                    <p>email: {email}</p>
                    </div>
                </Link>
                <button className={styles.deleteBtn} onClick={() => onDelete(id)}>delete</button>
            </div>
            );
        
      })}
    </div>
  );
};

export default ContactList;
