import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="clothes-container">
        <Link
          to={{
            pathname: "/constructor",
          }}
          className="link"
        >
          <div className="cloth-item">
            <img
              src={"https://img.icons8.com/material/480/FFFFFF/t-shirt--v1.png"}
              alt=""
            />
            <p>{"T-Shirt"}</p>
            <p>
              Price from: <span className="price">1000 </span>
            </p>
          </div>
        </Link>
        <Link to={"/basket"} className="link">
          <div className="cloth-item">
            <img
              src="https://img.icons8.com/color-glass/480/wicker-basket.png"
              alt="wicker-basket"
            />
            <p>{"Basket"}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MainPage;
