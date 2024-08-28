import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PracticsAddBtn = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/employee", {
        name: name,
        email: email
      })
      .then((res) => {
        navigate("/");
      })
  };

  return (
    <div className="addbtn">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="UserName"
            value={name}
            onChange={handleName}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="UserEmail"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PracticsAddBtn;
