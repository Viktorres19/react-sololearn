import './App.css';
import React, {useState, useEffect} from "react";
import AddPersonForm from "./components/AddPersonForm";
import ContactList from "./components/ContactList";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'
import {db} from './firebase'

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'persons'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let personsArray = [];
      querySnapshot.forEach((item) => {
        personsArray.push({ ...item.data(), id: item.id });
      });
      setContacts(personsArray);
    });
    return () => unsub();
  }, [])

  const addPerson = async (name, surname, position, city) => {
    await addDoc(collection(db, 'persons'), {
      name: name.trim(),
      surname: surname.trim(),
      position: position.trim(),
      city: city.trim()
    })
  }

  return (
    <div className="app">
      <div className="container">
        <AddPersonForm handleSubmit={addPerson} />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
