// // PARENT TO CHILD

// import React from "react";
// import Child from "./Chaild";

// const Parent = () => {
//   const sum = () => {
//     alert(10 + 20);
//   };

//   return (
//     <>
//       <h1>Props Data Transfer</h1>
//       <Child Add={sum} />
//     </>
//   );
// };
// export default Parent;



// CHILD TO PARENT




import React from "react";
import Child from "./Chaild";
import Dummy from "./Dummy";

const Parent = () => {
//   const sum = (data) => {
//     alert(data);
//   };

  return (
    <>
      <h1>Props Data Transfer</h1>
      {/* <Child Add={sum} /> */}
      <Child Dummy={Dummy} />
    </>
  );
};
export default Parent;
