import React from "react";
import "../css/Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  return (
    <div>
      <div className="searchbox">
        <h1 className="searchboxheading">Search</h1>
        <p className="searchboxcontent">Find your best Bus</p>
        <input className="searchboxinput" type="text" placeholder="Search" />
        <button className="searchbtn">
          <FontAwesomeIcon className="searchicon" icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
