import React, { useEffect } from "react";
import { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LayoutComponent from "../components/layouts/LayoutComponent";
import ProductPage from "../pages/productPage/ProductPage";
import AboutUs from "../pages/aboutUs/AboutUs";
import AdminLogin from "../pages/adminLogin/AdminLogin";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import AdminProduct from "../pages/adminProduct/AdminProduct";
import ProductDetail from "../pages/productPage/productDetail/ProductDetail";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <>
      <Suspense fallback={<LoadingComponent />}>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productpage" element={<ProductPage />} />
            <Route path="/productpage/:uuid" element={<ProductDetail />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/adminproduct" element={<AdminProduct />} />
          </Routes>
        </LayoutComponent>
      </Suspense>
    </>
  );
};

export default RouteManagement;
