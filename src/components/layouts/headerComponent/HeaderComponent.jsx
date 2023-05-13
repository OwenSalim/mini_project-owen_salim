import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./headerComponent.css";
import { AtrixShop } from "../../../assets/index";
import { Button } from "antd";

const HeaderComponent = () => {
  const token = localStorage.getItem("token");

  const [selected, setSelected] = useState("product");
  const path = window.location.pathname;

  useEffect(() => {
    if (path === "/productpage") {
      setSelected("product");
    } else if (path === "/aboutus") {
      setSelected("aboutus");
    } else if (path === "/adminproduct") {
      setSelected("admin");
    } else {
      setSelected("");
    }
  }, [path]);

  return (
    <>
      <div className="header">
        <div className="header-layout">
          <Link to={"/"}>
            <img src={AtrixShop} alt="Atrix Shop" className="logo" />
          </Link>
          <div className="link-wrapper">
            <Link to={"/productpage"}>
              <p
                className={`link ${
                  selected === "product" ? "selectedHeader" : ""
                }`}
              >
                Product
              </p>
            </Link>
            <Link to={"/aboutus"}>
              <p
                className={`link ${
                  selected === "aboutus" ? "selectedHeader" : ""
                }`}
              >
                About Us
              </p>
            </Link>
            <Link to={token ? "/adminproduct" : "/adminlogin"}>
              <p
                className={`link ${
                  selected === "admin" ? "selectedHeader" : ""
                }`}
              >
                Admin
              </p>
            </Link>

            {token && (
              <Link to="/adminlogin">
                <Button
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
