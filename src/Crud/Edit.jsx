import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  const [ids, setIds] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const fetchdata = () => {
    axios.get("http://localhost:3000/users/" + id).then((res) => {
      console.log("res");
      
      setEmail(res.data.email);
      setIds(res.data.id);
      setName(res.data.name);
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const updateData = (e) => {
    e.preventDefault();
    alert("are you to update me");
    axios
      .patch("http://localhost:3000/users/" + id, {
        id: ids,
        name: name,
        email: email,
      })
      .then((res) => {
        alert("user Is Successfully updated");
      });
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">ID :-</label>
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
            value={name}
            placeholder="UserName"
            className="from-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email :-</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            className="from-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button onClick={updateData}>Submit</button>
      </form>
    </>
  );
};
export default Edit;
