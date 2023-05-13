import React from "react";
import { Card, Carousel } from "antd";
import "./homePage.css";
import { Processor, Motherboard, RAM, PSU, SSD, VGA } from "../../assets/index";
import Gap from "../../components/gap/Gap";
import { Alert } from "antd";
import Marquee from "react-fast-marquee";
import { Avatar, List } from "antd";
const { Meta } = Card;
import { Rate } from "antd";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Andry",
    description: "Barang bagus dan original. Terima kasih !!!",
  },
  {
    title: "Kevin",
    description: "Barang sudah disampai tapi belum dicoba. Terima kasih !!!",
  },
  {
    title: "Carles",
    description: "Barang murah dan masih baru. Terima kasih !!!",
  },
  {
    title: "Marshell",
    description: "Barang cepat sampai dan aman. Terima kasih !!!",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="carousel">
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
      </div>

      <Gap height={40} />
      <div className="homePage-itemIcon">
        <div className="homePage-itemlayout">
          <p>Toko Kami Menjual</p>
          <Gap height={40} />
          <Link to={`/productpage/`}>
            <div className="homepage-icon">
              <Card
                className="card"
                style={{
                  width: 150,
                }}
                cover={
                  <img
                    alt="Processor"
                    src={Processor}
                    height={120}
                    className="card"
                  />
                }
              >
                <Meta title="Processor" className="cardName" />
              </Card>

              <Card
                className="card"
                style={{
                  width: 150,
                }}
                cover={
                  <img
                    alt="Motherboard"
                    src={Motherboard}
                    height={120}
                    className="card"
                  />
                }
              >
                <Meta title="Motherboard" />
              </Card>

              <Card
                className="card"
                style={{
                  width: 150,
                }}
                cover={
                  <img alt="RAM" src={RAM} height={120} className="card" />
                }
              >
                <Meta title="RAM" />
              </Card>

              <Card
                className="card"
                style={{
                  width: 150,
                }}
                cover={
                  <img alt="PSU" src={PSU} height={120} className="card" />
                }
              >
                <Meta title="PSU" />
              </Card>

              <Card
                className="card"
                style={{
                  width: 150,
                }}
                cover={
                  <img alt="VGA" src={VGA} height={120} className="card" />
                }
              >
                <Meta title="VGA" />
              </Card>

              <Card
                className="card"
                style={{
                  width: 150,
                }}
                cover={
                  <img alt="SSD" src={SSD} height={120} className="card" />
                }
              >
                <Meta title="SSD" />
              </Card>
            </div>
          </Link>
        </div>
      </div>
      <Gap height={40} />
      <div className="homePage-layout2">
        <div className="homePage-content2">
          <p>Testimonial</p>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                    />
                  }
                  title={item.title}
                  description={item.description}
                />
                <Rate allowHalf disabled defaultValue={4} />
              </List.Item>
            )}
          />
        </div>
      </div>
      <Gap height={40} />
      <Alert
        className="alert"
        banner
        message={
          <Marquee pauseOnHover gradient={true}>
            Atrix Shop buka setiap hari pada pukul 07:00 WIB s.d. 17:00 WIB dari
            hari Senin s.d. Jumat, kami hanya menjual produk original !!.
            Hindari penipuan yang mengatasnamakan Atrix Shop. Terima Kasih.
            Selamat berbelanja !!
          </Marquee>
        }
      />
    </>
  );
};

export default HomePage;
