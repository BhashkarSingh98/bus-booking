import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Burger from "./hamburger/Burger";

const Navlink = () => {
  const [show, setshow] = useState(true);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <>
    <div className="toogle">
    {show? <div>

        {auth ? (
          <div className="navbar">
            <div className="navbar1">
              <ul>
                <li id="l1">
                  <NavLink className="a" id="a1" to="/">
                    Home
                  </NavLink>
                </li>
                <li id="l3">
                  <NavLink className="a" id="a3" to="/booknow">
                    Book-Now
                  </NavLink>
                </li>
                <li id="l2">
                  <NavLink className="a" id="a2" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li id="l4">
                  <NavLink className="a" id="a4" to="/about">
                  About
                  </NavLink>
                </li>
                <li id="l5">
                  <NavLink className="a" id="a5" to="/contact" >
                 contact
                  </NavLink>
                </li>
                <li id="l6">
                  <NavLink className="a" id="a6" onClick={logout} to="/signup">
                    Logout ({JSON.parse(auth).name})
                  </NavLink>
                </li>
              </ul>
            </div>
            <hr />
          </div>
         ) : (
          <div className="navbar">
            <div className="navbar1">
              <ul className="nav-ul right">
                <li>
                  <NavLink className="a " id="signin-input-link" to="/signup">Sign up</NavLink>
                </li>
                <li>
                  <NavLink className="a" id="login-input-link" to="/login">login</NavLink>
                </li>
              </ul>
            </div>
            <hr />
          </div>
         )}
         </div>:null}
         

        <div className="togle" onClick={() => setshow(!show)}>
          <span className="toglebutton">&gt;</span>
          <Burger />
        </div>
      </div>
  
    </>
  );
};

export default Navlink;


// import React from "react";
// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import Burger from "./hamburger/Burger";

// const Navlink = () => {
//   const [show, setshow] = useState(true);
//   const auth = localStorage.getItem("user");
//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.clear();
//     navigate("/signup");
//   };
//   return (
//     <>
//     <div className="toogle">
//     {show? <div>

//         {auth ? (
//           <div className="navbar">
//             <div className="navbar1">
//               <ul>
//                 <li id="l1">
//                   <NavLink className="a" id="a1" to="/">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li id="l2">
//                   <NavLink className="a" id="a2" to="/tourism">
//                     Tourism
//                   </NavLink>
//                 </li>
//                 <li id="l3">
//                   <NavLink className="a" id="a3" to="/technology">
//                     Technology
//                   </NavLink>
//                 </li>
//                 <li id="l4">
//                   <NavLink className="a" id="a4" to="/fitness">
//                     Fitness
//                   </NavLink>
//                 </li>
//                 <li id="l5">
//                   <NavLink className="a" id="a5" to="/bollywood">
//                     Bollywood
//                   </NavLink>
//                 </li>
//                 <li id="l6">
//                   <NavLink className="a" id="a6" to="/food">
//                     Food
//                   </NavLink>
//                 </li>
//                 <li id="l7">
//                   <NavLink className="a" id="a7" to="/newblog">
//                    New-Blog
//                   </NavLink>
//                 </li>
//                 <li id="l8">
//                   <NavLink className="a" id="a8" to="/addblog">
//                    Add-Blog
//                   </NavLink>
//                 </li>
//                 <li id="l9">
//                   <NavLink className="a" id="a9" onClick={logout} to="/signup">
//                     Logout ({JSON.parse(auth).name})
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//             <hr />
//           </div>
//          ) : (
//           <div className="navbar">
//             <div className="navbar1">
//               <ul className="nav-ul right">
//                 <li>
//                   <NavLink className="a " id="signin-input-link" to="/signup">Sign up</NavLink>
//                 </li>
//                 <li>
//                   <NavLink className="a" id="login-input-link" to="/login">login</NavLink>
//                 </li>
//               </ul>
//             </div>
//             <hr />
//           </div>
//          )}
//          </div>:null}
         

//         <div className="togle" onClick={() => setshow(!show)}>
//           <span className="toglebutton">&gt;</span>
//           <Burger />
//         </div>
//       </div>
  
//     </>
//   );
// };

// export default Navlink;

