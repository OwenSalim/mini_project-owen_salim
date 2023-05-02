import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./headerComponent/HeaderComponent";
import FooterComponent from "./footerComponent/FooterComponent";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout>
      <HeaderComponent />
      <Content>
        <div
          style={{
            minHeight: 640,
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
