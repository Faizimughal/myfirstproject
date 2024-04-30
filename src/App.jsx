// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import React, { useState } from 'react';

function UserInputs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Age:', age);
    console.log('Message:', message);
  };

  return (
    <div>
      <label htmlFor="">First name:</label>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      /> <br />
      <label htmlFor="">last name:</label>
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      /> <br />
      <label htmlFor="">your age:</label>
      <input 
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /> <br />
      <label htmlFor=""></label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea> <br />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}

export default UserInputs;
