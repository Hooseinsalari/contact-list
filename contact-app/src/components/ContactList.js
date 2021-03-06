import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteOneContact } from "../services/deleteContactsService";
import { getContacts } from "../services/getAllContacts";

// style
import styles from "./ContactList.module.css";

const ContactList = (props) => {
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {
      // console.log(error)
    }
  }, []);

  const deleteHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContacts = contacts.filter((item) => item.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log(error);
    }
  };

  const inputHandler = (event) => {
    setSearchItem(event.target.value);
    const search = event.target.value;
    
    if(search !== "") {
      const filteredContacts = allContacts.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts)
    } else {
      setContacts(allContacts)
    }
    
  };

  return (
    <div>
      <input type="text" className={styles.search} value={searchItem} onChange={inputHandler} />
      <h2>
        <Link to="/">Add contact</Link>
      </h2>
      {contacts.map((item) => {
        const { name, email, id } = item;
        return (
          <div key={id} className={styles.container}>
            <Link
              to={{
                pathname: `/user/:${id}`,
                state: { name: item.name, email: item.email },
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className={styles.value}>
                <p>name: {name}</p>
                <p>email: {email}</p>
              </div>
            </Link>
            <div>
              <Link to={`/edit/${id}`}>
                <button className={styles.editBtn}>Edit</button>
              </Link>
              <button
                className={styles.deleteBtn}
                onClick={() => deleteHandler(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
