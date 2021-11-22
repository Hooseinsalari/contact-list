import "./App.css";
import { Route, Switch } from "react-router-dom";

// components
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import UserInformation from "./components/UserInformation";
import EditContact from "./components/EditContact";


function App() {

  return (
    <div className="App">
      <h1>Contact App</h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={UserInformation} />
        <Route path="/contact-list" component={ContactList} />
        <Route path="/" component={AddContact} />
      </Switch>
    </div>
  );
}

export default App;
