import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBtn = () => {
 const [name, setName] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:3000/employee", {
        name: name,
        email: email,
      })
      .then((res) => {
        navigate("/");
      }).catch((error) => console.log(error));
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name :-</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="User Name"
            onChange={handleName}
          />
        </div>
        <div>
          <label htmlFor="email">Email :-</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="User Email"
            onChange={handleEmail}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
export default CreateBtn;
