import React from "react";
import "../css/Buscollection.css";
import { Link } from "react-router-dom";

const Buscollection = () => {
  return (
    <div>
      <div className="collectioncontainer">
        <div className="collectionitem">
          <img
            className="buscollectionimg"
            src="https://images.unsplash.com/photo-1518804216294-f512a995fdae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHR1cmlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <span className="buscollectionplace">Dehradun</span>
          <Link to="/booknow">
            <button className="buscollectionbtn">Book Now</button>
          </Link>
        </div>
        <div className="collectionitem">
          <img
            className="buscollectionimg"
            src="https://images.unsplash.com/photo-1622637783235-11b3a2081379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHR1cmlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
          <span className="buscollectionplace">Bageshwar</span>

          <Link to="/booknow">
            <button className="buscollectionbtn">Book Now</button>
          </Link>
        </div>
        <div className="collectionitem">
          <img
            className="buscollectionimg"
            src="https://images.unsplash.com/photo-1542668331-3c6b8b55e472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHVyaXNtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
          <span className="buscollectionplace">NAINITAL</span>

          <Link to="/booknow">
            <button className="buscollectionbtn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buscollection;
