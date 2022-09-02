import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = [ firstName, lastName, email, password]
    console.log("Welcome", newUser);
  }

  return (
    <div className="App">
      <form onSubmit={ createUser }>
        <div>
          <label>First Name:</label>
          < input type="text" onChange={ (e) => setFirstName(e.target.value) }/>
        </div>

        <div>
          <label>Last Name:</label>
          <input type="text" onChange={ (e) => setLastName(e.target.value) }/>
        </div>

        <div>
          <label>Email</label>
          <input type="email" onChange={ (e) => setEmail(e.target.value) }/>
        </div>

        <div>
          <label>Password</label>
          <input type="password" onChange={ (e) => setPassword(e.target.value) }/>
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) }/>
        </div>

        <input type="submit" value="Create User" />
      </form>

      <div>
        <p><b>First Name:</b> {firstName}</p>
        <p><b>Last Name</b> {lastName}</p>
        <p><b>Email:</b> { email }</p>
        <p><b>Password</b> { password }</p>
        <p><b>Confirm Password</b> { confirmPassword }</p>
      </div>
    </div>
  );
}

export default App;
