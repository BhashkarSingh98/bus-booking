import React from "react";
import "../css/Home.css";
import Buscollection from "./Buscollection";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="imgcontainer">
        <div className="imgbox">
          <img
            className="img"
            src="https://media.istockphoto.com/id/1327488242/photo/back-to-school.jpg?b=1&s=170667a&w=0&k=20&c=35ot6jgXap2nIDpu9XDz8tcm2ZCAdXAFTdZ7l7EYL-s="
            alt=""
          />
        </div>
        <div className="imgcontent">
          <h1 className="h111">ENJOY </h1>
          <h1 className="h111"> THE JOURNEY !!</h1>
          <p className="p111">
            DON'T COMPROMISE ON OTHES! GET FLAT 30% OFF FOR NEW USERS.
          </p>
          <Link to="/booknow">
            <button className="btn1">Book Now</button>
          </Link>
        </div>
      </div>
      <Buscollection />
      <Searchbar />
    </div>
  );
};

export default Home;
