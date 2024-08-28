// PARENT TO CHILD

// import React from "react";


// const Child = (Props) => {

//     return(
//         <>
//        <button onClick= {() => Props.Add()}>Click ME</button>
//         </>
//     )
// }

// export default Child;


// CHILD TO PARENT 

import React from "react";


const Child = (Props) => {
 
    // const data = 200; 
    return(
        <>
       {/* <button onClick= {() => Props.Add(data)}>Click ME</button> */}
       <Props.Dummy />
        </>
    )
}
export default Child;