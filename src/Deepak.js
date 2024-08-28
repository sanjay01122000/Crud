import React, { useEffect, useState } from "react";
import Naag from "./Deepak.jpg";
const Deepak = () => {
  const [name, setName] = useState(true);

  const [count, setCount] = useState(0);
  console.log(count);

  const showData = () => {
    setCount(prev=>prev+1);

//     setTimeout(() => {
//       showData();
//     },5000);
//   };

//   useEffect(() => {
//     showData();
//   }, []);
  }

  return (
    <>
      <div>
        {/* <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name=="Deepak"?
        <img src={Naag}/>:
        ''
        } */}
        {count%2==0?
        <h1 style={{ color: "red", height: "40px" }}>Hello sanjay Gandu</h1>:''}
        {count}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button onClick={showData}>Click Me</button>
      </div>
    </>
  );
};

export default Deepak;
