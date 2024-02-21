import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import { isLoggedIn } from "./auth";
import Sidebar from "./Sidebar";
import food from "./balanced-diet.png"
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'
const PrivateRoutes = () => {
  const navigate = useNavigate();
  const user = useSelector(store=> store.login)
  const cartItems = useSelector(store => store.cart.items)
  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "orange",
        }}
      >
        <div style={{ width:'60px',height:'60px'}}><img style={{color:'white'}}src={food} alt="images"/></div>

        <div style={{ color: "whitesmoke", fontWeight: "bold" }}>
          {user?.user?.email}
        </div>
        <div className="flex items-center justify-center">
          {" "}
          <Link to="/cart"> <p className="px-3 font-bold">{cartItems?.length}</p>
          <svg style={{color:'green',marginTop:'-10px'}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg>


          </Link>
          {/* <div className="px-2 text-white font-bold" data-testid="online">{isOnline ?"🟢":"🔴"}</div> */}
          <button
            style={{ display: "flex" }}
            onClick={() => {
              window.localStorage.clear();
              navigate("");
            }}
          >
           
            <button className="font-bold bg-red-600 border-2 px-3 py-2 border-black-200 rounded-lg text-white">Logout</button>
             {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
                clipRule="evenodd"
              />
            </svg> */}
          </button>
        </div>
      </div>

      {isLoggedIn() ? (
        <div style={{ display: "flex", paddingTop: "60px" }}>
          <div style={{ position: "fixed" }}>
            <Sidebar />
          </div>
          <div
            style={{
              marginLeft: "25vh",
              alignItems:'center',
              width: "100%",
              overflowX: "auto",
              overflowY: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default PrivateRoutes;
