import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Apps = () => {
  const [records, setRecords] = useState([]);

  const fetchUserData = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      setRecords(res.data);
    });
  };

  const DeleteUser = (id) => {
 
    axios.delete("http://localhost:3000/users/" + id).then((res) => {
      alert("user is successfully deleted");
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="container">
      <div>
        <Link to="/create">Add+</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>Id:</td>
            <td>Name:</td>
            <td>Email:</td>
            <td>Action:</td>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => {
            return (
              <tr key={i}> 
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <button>
                    <Link to={`/update/${d.id}`}>Update</Link>
                  </button>
                  <button onClick={() => DeleteUser(d.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Apps;
