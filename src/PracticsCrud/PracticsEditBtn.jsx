import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PracticsEditBtn = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ids, setIds] = useState("");
  const [names, setNames] = useState("");
  const [emails, setEmails] = useState("");

  const handleName = (e) => { 
    setNames(e.target.value);
  };
  const handleEmail = (e) => {
    setEmails(e.target.value);
  };

  const fechData = () => {
    axios.get("http://localhost:3000/employee/" + id).then((res) => {
      setIds(res.data.id);
      setNames(res.data.name);
      setEmails(res.data.email);
    });
  };

  const handleChange = () => {
    axios
      .patch("http://localhost:3000/employee/" + id, {
        id: ids,
        name: names,
        email: emails,
      })
      .then((res) => {
        navigate("/");
      });
  };

  useEffect(() => {
    fechData();
  }, []);

  return (
    <div className="editbtn">
      <form>
        <div>
          <input type="text" 
          disabled
           placeholder="id" 
           name="id"
            value={ids}
             />
        </div>
        <div>
          <input
            type="text"
            placeholder="User Name"
            name="name"
            value={names}
            onChange={handleName}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="User Email"
            name="email"
            value={emails}
            onChange={handleEmail}
          />
        </div>
      </form>
      <div>
        <button onClick={handleChange}>Submit</button>
      </div>
    </div>
  );
};

export default PracticsEditBtn;
