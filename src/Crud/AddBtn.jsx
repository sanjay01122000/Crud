import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBtn = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

const navigate = useNavigate();

  const handleSubmit = (event) => {
     event.preventDefault();

     axios.post('http://localhost:3000/users',{
      name:name,
      email:email
     })
     .then(res => {
        navigate('/')
     }).catch(err => console.log(err));
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name :-</label>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="UserName"
        className="from-control"
        onChange={(e) => setName( e.target.value )}
      />
      <label htmlFor="email">Email :-</label>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        className="from-control"
        onChange={(e) => setEmail( e.target.value)}
      />
      <button>Submit</button>
      </form>
    </>
  );
};
export default AddBtn;
