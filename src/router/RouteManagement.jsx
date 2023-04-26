import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LayoutComponent from "../components/layouts/LayoutComponent";
import ProductPage from "../pages/productPage/ProductPage";
import AboutUs from "../pages/aboutUs/AboutUs";
import AdminLogin from "../pages/adminLogin/AdminLogin";

const RouteManagement = () => {
  return (
    <>
      <Suspense>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productpage" element={<ProductPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
          </Routes>
        </LayoutComponent>
      </Suspense>
    </>
  );
};

export default RouteManagement;
