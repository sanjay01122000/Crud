import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBtn = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [ids, setIds] = useState("");
  const [names, setNames] = useState("");
  const [emails, setEmails] = useState("");

  const fetchData = () => {
    axios.get("http://localhost:3000/employee/" + id).then((res) => {
      setIds(res.data.id);
      setNames(res.data.name);
      setEmails(res.data.email);
    });
  };



  const updateData = () => {
    axios
      .patch("http://localhost:3000/employee/" + id, {
        id: ids,
        email: emails,
        name: names,
      })
      .then((res) => {
        navigate('/')
      });
  };
  

    useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <from>
        <div>
          <label htmlFor="id">Id :-</label>
          <input
            type="text"
            disabled
            name="name"
            value={ids}
            placeholder="UserName"
            className="from-control"
          />
        </div>
        <div>
          <label htmlFor="name">Name :-</label>
          <input
            type="text"
            name="name"
            value={names}
            placeholder="User Name"
            onChange={(e) => setNames(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email :-</label>
          <input
            type="email"
            name="email"
            value={emails}
            placeholder="User Email"
            onChange={(e) => setEmails(e.target.value) }
          />
        </div>
        <div>
          <button onClick={updateData}>Submit</button>
        </div>
      </from>
    </>
  );
};
export default UpdateBtn;
