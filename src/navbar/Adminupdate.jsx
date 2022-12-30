import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Adminupdate = () => {
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [seatNo, setseatNo] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getproductdet = async () => {
      let result = await fetch(
        `https://long-tan-crane-hem.cyclic.app/admin/${params.id}`
      );
      result = await result.json();
  
      console.log(result);
      setname(result.name);
      setgender(result.gender);
      setseatNo(result.seatNo);
    };
    getproductdet()
  },[params.id]);


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
    alert("Ticket Confirmed ");
    navigate("/admin1");
  };

  return (
    <div>
      <div className="update">
        <div className="from-box-1"></div>
        <div className="login-box-2">
          <h1 className="register">Details</h1>

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

          <button className="buttonsignup" onClick={updateproduct}>
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adminupdate;
