import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./headerComponent/HeaderComponent";
import FooterComponent from "./footerComponent/FooterComponent";
import { Background1 } from "../../assets";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout>
      <HeaderComponent />
      <Content>
        <div
          style={{
            minHeight: 850,
            backgroundImage: `url(${Background1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
