import React from "react";
import { Link } from "react-router-dom";
import "../css/Buslist.css";

const Buslist = () => {
  return (
    <div>
        <div className="the-lesest" style={{marginTop:"20px",marginBottom:"30px"}}>
        <h1>Book List</h1>
        <div style={{width:"180px"}} className="underline-1"></div>
      </div>
      <div className="buslist">
        <div className="bus-card">
          <img
            className="buslist-img"
            src="https://ak.picdn.net/shutterstock/videos/1068643934/thumb/6.jpg?ip=x480"
            alt=""
          />
          <p className="busname">Volvo</p>
          <p className="buslist-add1">
            <span>Dehradun</span> <span>-To- </span>
            <span>Nainital</span>
          </p>
          <p className="buslist-bustime">
            <span>Time - </span>
            <span>01/01/2023</span>
          </p>
          <Link to="/bookseat">
            <button className="buslist-btn">Book Now</button>
          </Link>
        </div>
        <div className="bus-card">
          <img
            className="buslist-img"
            src="https://media.istockphoto.com/id/1371319562/photo/blue-bus-moving-on-the-road-in-city-in-early-morning.jpg?b=1&s=170667a&w=0&k=20&c=A0AGQw5p7rPyLsLT42VPg3hWqyAf6OnE1FdrjtTN3wU="
            alt=""
          />
          <p className="busname">Volvo</p>
          <span>Dehradun</span> <span>-To- </span>
          <span>Nainital</span>
          <p className="buslist-bustime">
            <span>Time - </span>
            <span>01/01/2023</span>
          </p>
          <Link to="/bookseat">
            <button className="buslist-btn">Book Now</button>
          </Link>
        </div>
        <div className="bus-card">
          <img
            className="buslist-img"
            src="https://media.istockphoto.com/id/540124958/photo/coach-bus.jpg?b=1&s=170667a&w=0&k=20&c=WJQ7FMF_kW_bldWe7b0_WLvV45ZiIbezhQEO2B4xsSI="
            alt=""
          />
          <p className="busname">Volvo</p>
          <span>Dehradun</span> <span>-To- </span>
          <span>Nainital</span>
          <p className="buslist-bustime">
            <span>Time - </span>
            <span>01/01/2023</span>
          </p>
          <Link to="/bookseat">
            <button className="buslist-btn">Book Now</button>
          </Link>
        </div>
        <div className="bus-card">
          <img
            className="buslist-img"
            src="https://media.istockphoto.com/id/1372188593/photo/modern-city-bus.jpg?b=1&s=170667a&w=0&k=20&c=-2D1HiCF5NCus9CWUnziiTeKD_x8n1tmiZfJJ_GDzXk="
            alt=""
          />
          <p className="busname">Volvo</p>
          <span>Dehradun</span> <span>-To- </span>
          <span>Nainital</span>
          <p className="buslist-bustime">
            <span>Time - </span>
            <span>01/01/2023</span>
          </p>
          <Link to="/bookseat">
            <button className="buslist-btn">Book Now</button>
          </Link>
        </div>
        <div className="bus-card">
          <img
            className="buslist-img"
            src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <p className="busname">Volvo</p>
          <span>Dehradun</span> <span>-To- </span>
          <span>Nainital</span>
          <p className="buslist-bustime">
            <span>Time - </span>
            <span>01/01/2023</span>
          </p>
          <Link to="/bookseat">
            <button className="buslist-btn">Book Now</button>
          </Link>
        </div>
        <div className="bus-card">
          <img
            className="buslist-img"
            src="https://images.unsplash.com/photo-1600198741448-fc40d918673a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGJ1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <p className="busname">Volvo</p>
          <span>Dehradun</span> <span>-To- </span>
          <span>Nainital</span>
          <p className="buslist-bustime">
            <span>Time - </span>
            <span>01/01/2023</span>
          </p>
          <Link to="/bookseat">
            <button className="buslist-btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buslist;