import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Crud = () => {
  const [display, setDisplay] = useState([]);

  const navigate = useNavigate();

  const fetchUserData = () => {
    axios.get("http://localhost:3000/employee").then((res) => {
      setDisplay(res.data);
    });
  };

  const DeleteUser = (id) => {
    axios.delete("http://localhost:3000/employee/" +id).then((res) => {
      alert('user is successfully deleted');
      navigate('/')
    })
  }

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="conatiner">
    <div>
        <button>
            <Link to='/create' >ADD +</Link>
        </button>
    </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {display.map((user) => {
            return (
              <>
                <tr key={user.id}>
                  <td >{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button><Link to={`/updatebtn/${user.id}`} >Update</Link></button>
                  
                    <button onClick= {() => DeleteUser(user.id)} >Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Crud;
