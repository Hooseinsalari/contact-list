import { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// components
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import UserInformation from "./components/UserInformation";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      {
        id: Math.ceil(Math.random() * 100),
        name: contact.name,
        email: contact.email,
      },
    ]);
    // console.log(contacts)
  };

  const deleteHandler = (id) => {
    // console.log("click", id)
    const filteredContacts = contacts.filter((item) => item.id !== id);
    // console.log(filteredContacts)
    setContacts(filteredContacts);
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Contact App</h1>
      <Switch>
        <Route path="/contact-list/:id" component={(props) => <UserInformation contacts={contacts} {...props} />} />
        <Route
          path="/contact-list"
          component={() => (
            <ContactList contacts={contacts} onDelete={deleteHandler} />
          )}
        />
        <Route
          path="/"
          component={(props) => (
            <AddContact addContactHandler={addContactHandler} {...props} />
          )}
        />
      </Switch>

      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} onDelete={deleteHandler} /> */}
    </div>
  );
}

export default App;
