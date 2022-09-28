import './App.scss';
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
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      city: city.trim(),
      status: false,
      completed: true
    })
  }

  const deletePerson = async (id) => {
    await deleteDoc(doc(db, 'persons', id))
  }

  const toggleStatus = async (contact) => {
    await updateDoc(doc(db, "persons", contact.id), { status: !contact.status });
  }

  const saveTask = async (id, newName, newSurname, newCity, newPosition) => {
    await updateDoc(doc(db, "persons", id), {
      name: newName,
      surname: newSurname,
      city: newCity,
      position: newPosition
    });
  }

  const toggleCompleted = async (contact) => {
    await updateDoc(doc(db, "persons", contact.id), { completed: !contact.completed });
  }

  return (
    <div className="app">
      <Header contacts={contacts} />
      <main className="main">
        <div className="container">
          <AddPersonForm handleSubmit={addPerson} />
          <ContactList
            contacts={contacts}
            deletePerson={deletePerson}
            toggleStatus={toggleStatus}
            saveTask={saveTask}
            toggleCompleted={toggleCompleted}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
