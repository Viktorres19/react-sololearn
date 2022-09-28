import React from "react";
import './ContactList.scss'
import Contact from "./Contact";

const ContactList = ({contacts, deletePerson, toggleStatus, saveTask, toggleCompleted}) => {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deletePerson={deletePerson}
          toggleStatus={toggleStatus}
          saveTask={saveTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  )
}

export default ContactList;