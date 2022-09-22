import React, {useState} from "react";
import './AddPersonForm.scss'

const AddPersonForm = (props) => {
  const [ person, setPerson ] = useState('');

  const handleChange = (e) => {
    setPerson(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="text"
             placeholder="Add new contact"
             onChange={handleChange}
             value={person}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddPersonForm;