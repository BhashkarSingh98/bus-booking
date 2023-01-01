import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Adminpdate = () => {
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [seatNo, setseatNo] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getproductdet = async () => {
      let result = await fetch(
        `https://long-tan-crane-hem.cyclic.app/passenger/${params.id}`
      );
      result = await result.json();
  
      console.log(result);
      setname(result.name);
      setgender(result.gender);
      setseatNo(result.seatNo);
    };
    getproductdet()
  },[params.id]);

  // const getproductdet = async () => {
  //   let result = await fetch(
  //     `https://long-tan-crane-hem.cyclic.app/passenger/${params.id}`
  //   );
  //   result = await result.json();

  //   console.log(result);
  //   setname(result.name);
  //   setgender(result.gender);
  //   setseatNo(result.seatNo);
  // };

  const updateproduct = async () => {
    console.log(name, gender, seatNo);
    let result = await fetch(
      `https://long-tan-crane-hem.cyclic.app/admin/${params.id}`,
      {
        method: "Put",
        body: JSON.stringify({ name, gender, seatNo }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    console.log(result);
    alert("Ticket Removed ");
    navigate("/admin");
  };

  return (
    <div>
      <div className="update">
        <div className="from-box-1"></div>
        <div className="login-box-2">
          <h1 className="register">Details</h1>
          <p style={{color:"red",marginTop:"-30px",marginBottom:"20px",width:"90%",fontSize:"1rem"}}>Please remove Name and Gender</p>

          <input
            type="text"
            className="inputbox"
            placeholder="NAME"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <input
            type="text"
            className="inputbox"
            placeholder="GENDER"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
          />

          <input
            type="text"
            className="inputbox"
            placeholder="SEAT-NO"
            value={seatNo}
          />

          <button style={{backgroundColor:"#FF0000"}} className="buttonsignup" onClick={updateproduct}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adminpdate;
