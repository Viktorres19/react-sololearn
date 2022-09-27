import React, {useState} from "react";
import './AddPersonForm.scss'

const AddPersonForm = (props) => {
  const [ name, setName ] = useState('');
  const [ surname, setSurname ] = useState('');
  const [ position, setPosition ] = useState('');
  const [ city, setCity ] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  }

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  }

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !== '' && surname !== '' && position !== '' && city !== '') {
      props.handleSubmit(name, surname, position, city);
      setName('');
      setSurname('');
      setPosition('');
      setCity('');
    }
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="text"
             placeholder="Enter name"
             onChange={handleChange}
             value={name}
      />
      <input type="text"
             placeholder="Enter surname"
             onChange={handleSurnameChange}
             value={surname}
      />
      <input type="text"
             placeholder="Enter position"
             onChange={handlePositionChange}
             value={position}
      />
      <input type="text"
             placeholder="Enter city"
             onChange={handleCityChange}
             value={city}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default AddPersonForm;