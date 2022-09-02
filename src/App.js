import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const [fNameError, setFNameError] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState(" ");
  const [confPassError, setConfPassError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = [ firstName, lastName, email, password]
    console.log("Welcome", newUser);
    setHasBeenSubmitted(true);
  };

  // const formMessage = () => {
  //   if (hasBeenSubmitted) {
  //     return "Thank you for submitting the form!";
  //   } else {
  //     return "Welcome, please submit the form";
  //   }
  // };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  
      if (e.target.value.length < 2) {
        setFNameError("First Name must be at least 2 characters long")
      } else {
        setFNameError("")
      }
    };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  
      if (e.target.value.length < 2) {
        setLNameError("Last Name must be at least 2 characters long")
      } else {
        setLNameError("")
      }
    };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  
      if (e.target.value.length < 5) {
        setEmailError("Email must be at least 5 characters long")
      } else {
        setEmailError("")
      }
    };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  
      if (e.target.value.length < 4) {
        setPassError("Password must be at least 4 characters long")
      } else {
        setPassError("")
      }
    };

  const handleConfPassword = (e) => {
    setConfirmPassword(e.target.value); 
  
      if (confirmPassword !== password) {
        setConfPassError("Passwords must match!")
      } else {
        setConfPassError("")
      }
    };
  
  

  return (
    <div className="App">
      <form onSubmit={ createUser }>
        {/* ternary operator */ }
      {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
      }
        <div>
          <label>First Name:</label>
          < input type="text" onChange={ handleFirstName }/>
          {
            fNameError ? <p style={{color:'red'}}>{ fNameError }</p> : ""
          }
        </div>

        <div>
          <label>Last Name:</label>
          <input type="text" onChange={ handleLastName }/>
          {
            lNameError ? <p style={{color:'red'}}>{ lNameError }</p> : ""
          }
        </div>

        <div>
          <label>Email</label>
          <input type="email" onChange={ handleEmail }/>
          {
            emailError ? <p style={{color:'red'}}>{ emailError }</p> : ""
          }
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={ handlePassword }/>
          {
            passError ? <p style={{color:'red'}}>{ passError }</p> : ""
          } 
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" onChange={ handleConfPassword }/>
          {
            confPassError ? <p style={{color:'red'}}>{ confPassError }</p> : ""
          }
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
