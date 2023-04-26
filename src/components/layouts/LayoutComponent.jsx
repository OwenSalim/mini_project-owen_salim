import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./headerComponent/HeaderComponent";
import FooterComponent from "./footerComponent/FooterComponent";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout>
      <HeaderComponent />
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 800,
          }}
        >
          {children}
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default LayoutComponent;
