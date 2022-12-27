// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const Update = () => {
  
//   const [name, setname] = useState("");
//   const [gender, setgender] = useState("");
//   const params = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log(params);
//     getproductdet();
//   },[]);

//   const getproductdet = async () => {
//     let result = await fetch(`http://localhost:5050/booknow/${params.id}`);
//     result = await result.json();

//     console.log(result);
//     setname(result.name);
//     setgender(result.gender);
//   };

//   const updateproduct = async () => {
//     console.log(name,gender);
//     // name: " ",
//     // gender: " ",
//     // seatNo: 3,
//     // booked: false,
//     let result = await fetch(`http://localhost:5050/booknow/${params.id}`, {
//       method: "Put",
//       body: JSON.stringify({ name,gender }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     result = await result.json();
//     console.log(result);
//     navigate("/booknow");
//   };

//   return (
//     <div>
//       <div className="update">
//         <div className="from-box-1">

//         </div>
//         <div className="login-box-2">
//       <h1 className="register">book now</h1>
//       <input
//         type="text"
//         className="inputbox"
//         placeholder="enter title"
//         value={name}
//         onChange={(e) => setname(e.target.value)}
//       />
//       <input
//         type="text"
//         className="inputbox"
//         placeholder="enter about blog"
//         value={gender}
//         onChange={(e) => setgender(e.target.value)}
//       />
//       <button className="buttonsignup" onClick={updateproduct}>
//         confirm
//       </button>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Update;








import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  //     const [name,setname]=useState("")
  //     const [price,setprice]=useState("")
  //     const [category,setcategory]=useState("")
  //     const [company,setcompany]=useState("");
  // const params=useParams()
  // const navigate=useNavigate()

  // useEffect(()=>{
  //     console.log(params);
  //     getproductdet()
  // },[])

  // const getproductdet=async()=>{
  //     let result=await fetch(`http://localhost:5000/product/${params.id}`);
  //     result=await result.json();

  //     console.log(result);
  //     setname(result.name)
  //     setprice(result.price)
  //     setcategory(result.category)
  //     setcompany(result.company)

  // }

  //     const updateproduct=async()=>{
  //         console.log(name,price,category,company);
  //         let result=await fetch(`http://localhost:5000/product/${params.id}`,{
  //             method:"put",
  //             body:JSON.stringify({name,price,category,company}),
  //             headers:{
  //                 "Content-Type":"application/json"
  //             }

  //         })
  //         result=await result.json()
  //         console.log(result);
  //         navigate("/")

  //         }
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [seatNo, setseatNo] = useState("");
  const [booked, setbooked] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(params);
    getproductdet();
  },[]);

  const getproductdet = async () => {
    let result = await fetch(`http://localhost:8000/product/${params.id}`);
    result = await result.json();

    console.log(result);
    setname(result.name);
    setgender(result.gender);
    setseatNo(result.seatNo);
    setbooked(result.booked);
  };

  const updateproduct = async () => {
    console.log(name, gender, seatNo, booked);
    let result = await fetch(`http://localhost:8000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, gender, seatNo, booked }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/booknow");
  };

  return (
    <div>
      <div className="update">
        <div className="from-box-1">

        </div>
        <div className="login-box-2">
      <h1 className="register">Update</h1>
      
      <input
        type="text"
        className="inputbox"
        placeholder="enter img src"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <input
        type="text"
        className="inputbox"
        placeholder="enter title"
        value={gender}
        onChange={(e) => setgender(e.target.value)}
      />

      <input
        type="text"
        className="inputbox"
        placeholder="enter about blog"
        value={seatNo}
        onChange={(e) => setseatNo(e.target.value)}
      />

      <input
        type="text"
        className="inputbox"
        placeholder="enter page name"
        value={booked}
        onChange={(e) => setbooked(e.target.value)}
      />


      <button className="buttonsignup" onClick={updateproduct}>
        Update Blog
      </button>
    </div>
    </div>
    </div>
  );
};

export default Update;







