import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';

function App() {
  const [contacts, setContacts] = useState()

  const addContactHandler = (event) => {
    event.preventDefault()
    console.log("clickef")
    // console.log(props)
  }
  return (
    <div className="App">
      <h1>Contact App</h1>
      <AddContact addContactHandler={addContactHandler} />
    </div>
  );
}

export default App;
