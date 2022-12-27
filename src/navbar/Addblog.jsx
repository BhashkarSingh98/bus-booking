import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addblog = () => {
  const [imgsrc, setimgsrc] = useState("");
  const [title, settitle] = useState("");
  const [about, setabout] = useState("");
  const [pagename, setpagename] = useState("");
  const [date, setdate] = useState("");
  const [error, seterror] = useState(false);

  const navigate = useNavigate();

  const handeladdproduct = async () => {
    navigate("/newblog");

    console.log(!title);
    if (!imgsrc || !title || !about || !pagename || !date) {
      seterror(true);
      return false;
    }

    //console.log(name,price,catagory,company);
    const userid = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userid);
    let result = await fetch("http://localhost:5000/addproduct", {
      method: "post",
      body: JSON.stringify({ imgsrc, title, about, userid, pagename, date }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <div>
      <div className="update">
        <div className="from-box-1"></div>
        <div className="login-box-2">
          <h1 className="register">Add New Blog</h1>
          <input
            type="text"
            className="inputbox"
            placeholder="enter img src"
            value={imgsrc}
            onChange={(e) => setimgsrc(e.target.value)}
          />
          {error && !imgsrc && <span className="error">enter valid name</span>}
          <input
            type="text"
            className="inputbox"
            placeholder="enter title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          {error && !title && <span className="error">enter valid price</span>}

          <input
            type="text"
            className="inputbox"
            placeholder="enter about blog"
            value={about}
            onChange={(e) => setabout(e.target.value)}
          />
          {error && !about && (
            <span className="error">enter valid catagary</span>
          )}

          <input
            type="text"
            className="inputbox"
            placeholder="enter page name"
            value={pagename}
            onChange={(e) => setpagename(e.target.value)}
          />
          {error && !pagename && (
            <span className="error">enter valid company</span>
          )}
          <input
            type="text"
            className="inputbox"
            placeholder="enter date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
          {error && !date && <span className="error">enter valid company</span>}

          <button className="buttonsignup" onClick={handeladdproduct}>
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addblog;
