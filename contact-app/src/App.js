import { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// components
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import UserInformation from "./components/UserInformation";

// http
import { getContacts } from "./services/getAllContacts";
import { deleteOneContact } from "./services/deleteContactsService";
import { postContact } from "./services/postContactService";
import EditContact from "./components/EditContact";
import { putContant } from "./services/putContantService";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {

    try {
      const {data} = await postContact(contact)
      setContacts([
        ...contacts,
        data
      ])
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  };

  const editContactHandler = async (contant, id) => {
    await putContant(id, contant)
    const {data} = await getContacts(id,contant)
    setContacts(data)
    console.log(data)
  }

  const deleteHandler = async (id) => {
    try {
      await deleteOneContact(id)
      const filteredContacts = contacts.filter((item) => item.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    // if (savedContacts) {
    //   setContacts(savedContacts);
    // }
    const fetchContacts = async () => {
      const {data} = await getContacts()
      setContacts(data)
    }
    try {
      fetchContacts()
    } catch (error) {
      // console.log(error)
    }
  }, []);

  return (
    <div className="App">
      <h1>Contact App</h1>
      <Switch>
        <Route path="/edit/:id" component={(props) => (
            <EditContact editContactHandler={editContactHandler} {...props} />
          )} />
        <Route path="/user/:id" component={UserInformation} />
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
