
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Booknow.css";

const Booknow = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    let result = await fetch("https://long-tan-crane-hem.cyclic.app/passengers");
    result = await result.json();
    setproducts(result);
  };

  return (
    <div className="product_list">
      <div className="the-lesest">
        <h1>Book Now</h1>
        <div style={{width:"180px"}} className="underline-1"></div>
      </div>

      <div className="booknowbox">
        <div className="booknowbox1">
          {products.length > 0 ? (
            products.map((item) => (
              <div key={item._id} className="booknowbox3">
                <div className="booknowboximg">
                  <img
                    style={{ backgroundColor: `${item.color}` }}
                    src="https://static.thenounproject.com/png/661611-200.png"
                    alt=""
                  />
                </div>
                <div className="booknowboxseat">
                  <p className="booknowseatno">{item.seatNo}</p>
                </div>
                <div className="booknowicons">
                 
                    <Link to={"/update/" + item._id}>
                      <button style={{display:`${item.display}`}} className="bookseat">Book Seat</button>
                    </Link>
                    <button style={{visibility:`${item.visibility}`}} className="booked" onClick={()=>{
                      alert(" this seat already booked..")
                    }}>Booked</button>

                 
                  
                </div>
              </div>
            ))
          ) : (
            <h1>Loading Please Wait...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booknow;
