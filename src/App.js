import './App.css';
import React, {useState} from "react";
import AddPersonForm from "./components/AddPersonForm";
import PeopleList from "./components/PeopleList";

const App = () => {
  const [contacts, setContacts] = useState(["James Smith", "Thomas Anderson", "Bruce Wayne"]);

  const addPerson = (name) => {
    setContacts([...contacts, name]);
  }

  return (
    <div className="app">
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

export default App;
