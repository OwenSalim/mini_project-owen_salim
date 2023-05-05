import React from "react";
import { Card, Carousel } from "antd";
import "./homePage.css";
import { Link } from "react-router-dom";
import {
  AtrixShop,
  Banner1,
  Banner2,
  Banner3,
  Processor,
  Motherboard,
  RAM,
  PSU,
  SSD,
  VGA,
} from "../../assets/index";

const { Meta } = Card;

const HomePage = () => {
  return (
    <>
      <Carousel autoplay dots={true} effect="fade">
        <div>
          <h1 className="slide1"> </h1>
        </div>
        <div>
          <h1 className="slide2"> </h1>
        </div>
        <div>
          <h1 className="slide3"></h1>
        </div>
        <div>
          <h1 className="slide4"></h1>
        </div>
      </Carousel>

      <div className="layout-homepage">
        <div className="content-homepage">
          <div className="homepage-icon">
            <Card
              style={{
                width: 150,
                textAlign: "center",
                backgroundColor: "#f1f6f9",
              }}
              cover={<img alt="Processor" src={Processor} height={120} />}
            >
              <Meta title="Processor" />
            </Card>

            <Card
              style={{
                width: 150,
                textAlign: "center",
                backgroundColor: "#f1f6f9",
              }}
              cover={<img alt="Motherboard" src={Motherboard} height={120} />}
            >
              <Meta title="Motherboard" />
            </Card>

            <Card
              style={{
                width: 150,
                textAlign: "center",
                backgroundColor: "#f1f6f9",
              }}
              cover={<img alt="RAM" src={RAM} height={120} />}
            >
              <Meta title="RAM" />
            </Card>

            <Card
              style={{
                width: 150,
                textAlign: "center",
                backgroundColor: "#f1f6f9",
              }}
              cover={<img alt="PSU" src={PSU} height={120} />}
            >
              <Meta title="PSU" />
            </Card>

            <Card
              style={{
                width: 150,
                textAlign: "center",
                backgroundColor: "#f1f6f9",
              }}
              cover={<img alt="VGA" src={VGA} height={120} />}
            >
              <Meta title="VGA" />
            </Card>

            <Card
              style={{
                width: 150,
                textAlign: "center",
                backgroundColor: "#f1f6f9",
              }}
              cover={<img alt="SSD" src={SSD} height={120} />}
            >
              <Meta title="SSD" />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
