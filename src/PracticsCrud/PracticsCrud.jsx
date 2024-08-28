import axios from "axios";
import React, { useState, useEffect } from "react";
import './PracticsCrud.css';
import { Link } from "react-router-dom";

const PracticsCrud = () => {
const [Show, setShow] = useState([]);

  const fetchData = () => {
   axios.get("http://localhost:3000/employee").then((res) => {
      setShow(res.data);
    });
  };

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/employee/' + id).then((res) => {
      alert('user successfully deleteed');
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="Crud"> Crud Opration...............</h1>
      <div className="btncenter">
        <button> <Link to="/practicsaddbtn"> ADD + </Link> </button>
      </div>
      <div className="centerdiv">
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
        { Show.map((d, i) => {
          return(
            <>
            <tr key={i}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>
                <button> <Link to={`/practicseditbtn/${d.id}`}>Edit</Link> </button>
                <button onClick={() => handleDelete(d.id)}>Delete</button>
            </td>
           </tr>
            </>
          )
        })}

        </tbody>
      </table>
      </div>
    
    </div>
  );
};

export default PracticsCrud;
