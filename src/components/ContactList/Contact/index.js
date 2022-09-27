import React from "react";
import './Contact.css'

const Contact = ({contact}) => {
  return (
    <li>
      <div className="contact-left">
        <div>
          {contact.name && <Name name={contact.name} />}
          {contact.surname && <Surname surname={contact.surname} />}
        </div>
        {contact.city && <City city={contact.city} />}
      </div>
      {contact.position && <Position position={contact.position} />}
    </li>
    )
}

const Name = ({name}) => {
  return <span className="name"><i>Name: </i> <b>{name}</b></span>
}

const Surname = ({surname}) => {
  return <span className="surname"><i>Surname: </i> <b>{surname}</b></span>
}

const Position = ({position}) => {
  return <div className="position"><i>Position: </i> <b>{position}</b></div>
}

const City = ({city}) => {
  return <div className="city"><i>City: </i> <b>{city}</b></div>
}

export default Contact;