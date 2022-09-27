import React, {useState, useEffect} from "react";

import './Header.css';

const Header = ({contacts}) => {
  const [contactsSum, setContactsSum] = useState([]);

  useEffect(() => {
    let contactsSum = null;
    contacts.map(contact => {
      contactsSum++;
      return contactsSum;
    });
    setContactsSum(contactsSum);
  }, [contacts]);


  return (
    <header className="header">
      <div className="container">
        <h1 className="h1">
          Progressive contact manager.&nbsp;
          <span>Now here {contactsSum} contact{contactsSum !== 1 && 's'}</span>
        </h1>
      </div>
    </header>
  )
}

export default Header;