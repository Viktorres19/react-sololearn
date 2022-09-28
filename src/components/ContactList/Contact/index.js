import React, {useState} from "react";
import './Contact.scss'
import { VscSave } from "react-icons/vsc";

const Contact = ({contact, deletePerson, toggleStatus, saveTask, toggleCompleted}) => {
  const [newName, setNewName] = useState(contact.name)
  const [newSurname, setNewSurname] = useState(contact.surname)
  const [newCity, setNewCity] = useState(contact.city)
  const [newPosition, setNewPosition] = useState(contact.position)

  const handleChangeName = (e) => {
    e.preventDefault();
    contact.name = "";
    setNewName(e.target.value);
  }

  const handleChangeSurname = (e) => {
    e.preventDefault();
    contact.name = "";
    setNewSurname(e.target.value);
  }

  const handleChangeCity = (e) => {
    e.preventDefault();
    contact.name = "";
    setNewCity(e.target.value);
  }

  const handleChangePosition = (e) => {
    e.preventDefault();
    contact.name = "";
    setNewPosition(e.target.value);
  }

  return (
    <li className="contact" onDoubleClick={() => toggleStatus(contact)}>
      <div className="contact-left">
        {
          !contact.completed &&
          <VscSave
            className="save-task"
            onClick={() => {
              saveTask(contact.id, newName, newSurname, newCity, newPosition)
              toggleCompleted(contact)
            }}
          />
        }
        <div className="contact-top">
          <div className="name">
            <i>Name: </i>
            {contact.completed ?
              <b onClick={() => toggleCompleted(contact)}>{contact.name}</b>
              :
              <input
                type="text"
                value={newName}
                onChange={handleChangeName}
              />
            }
          </div>
          <span className="surname">
            <i>Surname: </i>
            {contact.completed ?
              <b onClick={() => toggleCompleted(contact)}>{contact.surname}</b>
              :
              <input
                type="text"
                value={newSurname}
                onChange={handleChangeSurname}
              />
            }
          </span>
        </div>
        <div className="city">
          <i>City: </i>
          {contact.completed ?
            <b onClick={() => toggleCompleted(contact)}>{contact.city}</b>
            :
            <input
              type="text"
              value={newCity}
              onChange={handleChangeCity}
            />
          }
        </div>
      </div>
      <div className="position">
        <i>Position: </i>
        {contact.completed ?
          <b onClick={() => toggleCompleted(contact)}>{contact.position}</b>
          :
          <input
            type="text"
            value={newPosition}
            onChange={handleChangePosition}
          />
        }
      </div>
      <div className="delete-button"  onClick={() => deletePerson(contact.id)} />
      <div className={contact.status ? "contact-status active" : "contact-status"}>
        status: <span>{ contact.status ? "loyal" : "not loyal" }</span>
      </div>
    </li>
    )
}

export default Contact;