import React from "react";
import { Link } from "react-router-dom";
import "./headerComponent.css";
import { AtrixShop } from "../../../assets/index";

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="header-layout">
          <Link to={"/"}>
            <img src={AtrixShop} alt="Atrix Shop" className="logo" />
          </Link>
          <div className="link-wrapper">
            <Link to={"/"} className="link">
              <p>Home</p>
            </Link>
            <Link to={"/productpage"} className="link">
              <p>Product</p>
            </Link>
            <Link to={"/aboutus"} className="link">
              <p>About Us</p>
            </Link>
            <Link to={"/adminlogin"} className="link">
              <p>Admin</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
