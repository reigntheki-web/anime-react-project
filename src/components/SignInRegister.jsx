import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/init";

const auth = getAuth(app);

const SignInRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Signed in successfully!');
        
      })
      .catch((error) => {
        alert('Error signing in: ' + error.message);
      });
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Registered successfully!');
        // handle post registration actions here
      })
      .catch((error) => {
        alert('Error registering: ' + error.message);
      });
  };

  return (
    <div>
      <div className="sign-in-register">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="register-buttons">
        <button className="btn btn-primary" onClick={handleSignIn}>
          Sign In
        </button>
        <button className="btn btn-secondary" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default SignInRegister;