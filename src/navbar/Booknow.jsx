// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Booknow = () => {
//   const [passenger, setpassenger] = useState([]);
//   const [name, setname] = useState("");
//   const [gender, setgender] = useState("");

//   useEffect(() => {
//     getpassenger();
//   }, []);

//   const getpassenger = async () => {
//     let result = await fetch("http://localhost:5050/booknow");
//     result = await result.json();
//     setpassenger(result);
//   };

//   function handalsubmit(e) {
//     e.preventDefault();
//     setname("");
//     setgender("");
//   }
//   var selected_seats = [];

//   return (
//     <div>
//       <h1>book now</h1>
//       {passenger.map((item, ind) => {
//         return (
//           <>
//             <div key={ind}>
//               <h1 style={{ color: "green" }} id={`${item._id}`}>
//                 {item.seatNo}
//               </h1>
//               <h1>{item.name}</h1>
//               <h1>{item.gender}</h1>
//               <Link to={"/update/" + item._id}>
//                 update
//                   {/* onClick={() => {
//                     selected_seats.push(item._id);
//                     console.log(selected_seats);
//                     document.getElementById(item._id).style.color = "red";
//                   }}
//                 >
//                   book now
//                 </button> */} 
//               </Link>
//             </div>
//           </>
//         );
//       })}

//       {/* <form action="/confirm_ticket" method="POST" onSubmit={handalsubmit}> */}
//       {/* <form  onSubmit={handalsubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setname(e.target.value)}
//         />
//         <br />
//         <input
//           type="text"
//           value={gender}
//           onChange={(e) => setgender(e.target.value)}
//         />
//         <br />

//         <br />
//         <button type="submit">submit</button>
//       </form> */}
//     </div>
//   );
// };

// export default Booknow;




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Booknow = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    let result = await fetch("http://localhost:8000/products");
    result = await result.json();
    setproducts(result);
  };

  
  
  return (
    <div className="product_list">
      <div className="the-lesest">
        <h1>New Blog</h1>
        <div className="underline-1"></div>
      </div>

      <div className="article-box">
        <div className="article-box-1">
          {products.length > 0 ? (
            products.map((item) => (
              <div key={item._id} className="posts">
                <div className="post-img">
                  <img style={{backgroundColor:`${item.color}`}} src="https://static.thenounproject.com/png/661611-200.png" alt="" />
                </div>
                <div className="post-content-box">
                  <p className="post-content">{item.seatNo}</p>
                </div>
                <div className="navigation-date">
                </div>
                <div className="icons">
                  <Link to={"/update/" + item._id}>
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                  </Link>
                  
                </div>
              </div>
            ))
          ) : (
            <h1>no result found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booknow;
