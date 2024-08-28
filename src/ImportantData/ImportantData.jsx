// GETAPI AXIOS

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const InteGreatApi = () => {
//   const [state, setState] = useState([]);
//   console.log("aMHDFJKL", state);

//   const GetDataApi = async () => {
//     const result = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
  
//     setState(result.headers);
//   };

//   useEffect(() => {
//     GetDataApi();
//   }, []);

//   return (
//     <>
//       <h1> API InteGreat </h1>
//       {/* {state.map((elm) => {
//       return(
//         <> 
//         <h3>{elm.expires}</h3>
//         </>
//       )
//      })} */}
//       <h5>Conyent Type:{state?.expires}</h5>
//     </>
//   );
// };
// export default InteGreatApi;



// OBJECT OF ARRAY GET API DATA


// import React from "react";
// const Sanjay = () => {
//   const data = {
//     name: "Sanjay Yadav",
//     Desigbation: "Developer",

//     Freind: [
//       {
//         name: "hemant Pandey",
//       },
//       {
//         name: "Nillesh Pandey",
        
//       },
//       {
//         name: " Abc Nay one",
//       },
//     ],
//   };
//   return (
//     <>
//       <h5>Hello data</h5>
//       {data.Freind.map((el)=>{
//         return (
//             <>
//             <h4>name is:{el.name}</h4>
//             </>
//         )
//       })}
//     </>
//   );
// };
// export default Sanjay;




// ====================================================================

// JAVASCIPT GET API DATA


// import React, { useEffect, useState } from "react";


// const Data = () => {

//     const [state, setState] = useState([]);
//     // console.log(state, "jjjjjj");

//     async function fetchdata() {
//         let data = await fetch('https://jsonplaceholder.typicode.com/users');
//         let result = await data.json();

//         setState(result)

//     }
//     useEffect(() => {
//         fetchdata();
//     },[])
//     return (
//         <>
//             {state.map((el) => {
//                 return (
//                     <h1>{el.name}</h1>
//                 )
//             })}
//         </>

//     )
// }
// export default Data;



// ===================================================================

// REACT AXIOS GET API DATA


// import React, { useEffect, useState } from "react";
// import axios from "axios";


// const AxiosApiData = () => {

//     const [myData, setMyData] = useState([]);

//     const [isError, setIsError] = useState("");


//     // NOTE: using promises

//     // useEffect(() => {
//     //     axios.get('https://jsonplaceholder.typicode.com/users')
//     //         .then((res) => setMyData(res.data))
//     //         .catch((error) => {
//     //             setIsError(error.message);

//     //         })
//     // }, [])

//     // NOTE: using Async Await

//     const getApiData = async () => {
//         try {
//             const res = await axios.get('https://jsonplaceholder.typicode.com/users');
//             setMyData(res.data)
//         } catch (error) {
//             setIsError(error.message);
//         }

//     }

//     useEffect(() => {
//         getApiData();
//     }, [])

//     return (
//         <>
//             <h1>Axios Api Using</h1>
//             {isError !== "" && <h2>{isError}</h2>}
//             {myData.map((users) => {
//                 const { id, name, email, username } = users;
//                 return (
//                     <>
//                         <div key={id}>

//                             <h2>{name}</h2>
//                             <h2>{email}</h2>
//                             <h2>{username}</h2>

//                         </div>

//                     </>
//                 )
//             })}

//         </>
//     )
// }
// export default AxiosApiData;








// import axios from "axios";
// import React, { useEffect, useState } from "react";


// const AxioDataApi = () => {

//     const [state, setState] = useState([]);
//     const [isError, setIsError] = useState("")



//     const AxiosGetData = async () => {
//  try {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
//         setState(res.data);
//     }); 
//  } catch (error) {
//     setIsError(error.message);
//  }      
//     }

//     useEffect(() => {
//         AxiosGetData();
//     }, [])

//     return (
//         <>
//         <h1> Axio API Using </h1>
//         {isError !== "" && <h3>{isError}</h3>}
//             {state.map((elm) => {
            
//                 return (
//                     <>
//                        <h3>{elm.name}</h3>
//                     </>
//                 )
//             })}
//         </>
//     )
// }
// export default AxioDataApi;



// ===========================================================================


// INCREMENT DECREMENT PROGRAM

// import React, { useState } from 'react';


// const IncreDecrese = () => {

//     const [value, setValue] = useState(0);

//     const Increse = () => {
//         setValue(value + 1)
//     }

//     const Decrese = () => {
//         if (value > 0) {
//             setValue(value - 1)
//         }
//     }

//     return (
//         <>
//             <h1> Increment Decrement Program</h1>
//             <h3>{value}</h3>
//             <button onClick={Increse}>Increment</button>
//             <button onClick={Decrese}>decrement</button>
//         </>
//     )
// }
// export default IncreDecrese;



// USE ONCHANGE EVENT

// import React, { useState } from "react";

// const Sanjay = () => {
//   const [name, setName] = useState("");
//   console.log(name);

//   const [pwd, setPwd] = useState("");

//   const [displayValue, setDisplayValue] = useState("");

//   const handleChnage = (e) => {
//     setName(e.target.value);
//   };

//   const handleChnagepwd = (e) => {
//     setPwd(e.target.value);
//   };

//   const handleinput = () => {
//     alert("Name is "+name + " Password Is"+pwd);
//     setDisplayValue("Name is " + name + " Password is " + pwd);
// setName("");
// setPwrd("");
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="UserName"
//         value={name}
//         onChange={handleChnage}
//       />

//       <input
//         type="number"
//         placeholder="Password"
//         value={pwd}
//         onChange={handleChnagepwd}
//       />

//       <button onClick={handleinput}>Click Me</button>

//       <p>Displayed value : {displayValue}</p>
//     </>
//   );
// };

// export default Sanjay;




// OTP GENERATE

// import React, { useState } from "react";
// const OTP = () => {
//   const [data, setData] = useState();
//   const get_Otp = () => {
//     let datas = Math.floor(8000 * Math.random(0 - 9) + 8000);
//     console.log(datas);
//     setData(datas);
//   };

//   return (
//     <>
//       <h5>Otp Is:{data}</h5>
//       <button onClick={get_Otp}>Click Me</button>
//     </>
//   );
// };
// export default OTP;



