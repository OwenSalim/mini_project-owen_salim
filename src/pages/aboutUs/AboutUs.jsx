import React from "react";
import "./aboutUs.css";
import { AtrixShopAbout, AtrixShopMaps, WhatAppsIcon } from "../../assets";
import Gap from "../../components/gap/Gap";
import { Image } from "antd";

const AboutUs = () => {
  return (
    <div className="aboutUs-layout">
      <div className="aboutUs-content">
        <h1>About Us</h1>
        <Gap height={10} />
        <Image src={AtrixShopAbout} alt="Atrix Shop Photo" />
        <Gap height={25} />
        <p>
          AtrixShop menjual produk produk Elektronik Komputer yang berkualitas
          dari brand-brand yang ternama seperti AMD, NVIDIA, Intel dan masih
          banyak lagi . Dengan mengutamakan kualitas produk, dan kualitas
          pelayanan penjualan. Toko kami juga melayani jasa untuk perakitan
          komputer
        </p>
        <Gap height={20} />
        <p>
          Untuk info lebih lengkap dapat menghubungi admin kami dengan mengakses
          link berikut
        </p>
        <Gap height={20} />
        <a href="https://wa.link/0oh9ok" target="_b">
          <img
            src={WhatAppsIcon}
            alt="WhatApps Icon"
            className="wa-atrixshop"
          />
        </a>
        <Gap height={50} />
        <h1>Lokasi Toko Kami</h1>
        <Gap height={10} />
        <Image src={AtrixShopMaps} alt="Atrix Shop Maps" height={500} />
      </div>
    </div>
  );
};

export default AboutUs;
