import React from "react";
import { Link } from "react-router-dom";
import "./headerComponent.css";
import { AtrixShop } from "../../../assets/index";
import { Button } from "antd";

const HeaderComponent = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <div className="header">
        <div className="header-layout">
          <Link to={"/"}>
            <img src={AtrixShop} alt="Atrix Shop" className="logo" />
          </Link>
          <div className="link-wrapper">
            <Link to={"/productpage"} className="link">
              <p>Product</p>
            </Link>
            <Link to={"/aboutus"} className="link">
              <p>About Us</p>
            </Link>
            <Link to={token ? "/adminproduct" : "/adminlogin"} className="link">
              <p>Admin</p>
            </Link>

            {token && (
              <Link to={"/adminlogin"}>
                <Button
                  className="logout"
                  type="primary"
                  onClick={() => {
                    localStorage.removeItem("token");
                  }}
                  danger
                >
                  Logout
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
