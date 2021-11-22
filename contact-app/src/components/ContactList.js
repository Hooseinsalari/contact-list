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
                <Link to={{pathname:`/user/:${id}`, state:{name: item.name, email: item.email}}} style={{textDecoration:"none", color:"black"}}>
                    <div className={styles.value}>
                        <p>name: {name}</p>
                        <p>email: {email}</p>
                    </div>
                </Link>
                <div>
                  <Link to={`/edit/${id}`}><button className={styles.editBtn}>Edit</button></Link>
                  <button className={styles.deleteBtn} onClick={() => onDelete(id)}>Delete</button>
                </div>
            </div>
            );
        
      })}
    </div>
  );
};

export default ContactList;
