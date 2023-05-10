import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_BY_PK } from "../../adminProduct/query/product-query";
import LoadingComponent from "../../../components/loadingComponent/LoadingComponent";
import "./productDetail.css";
import { Button, Image } from "antd";
import Gap from "../../../components/gap/Gap";
import { RUPIAH } from "../../../components/currency";
import { WhatAppsIcon } from "../../../assets";

const ProductDetail = () => {
  const { uuid } = useParams();

  const {
    data: productData,
    loading: isProductLoading,
    erorr: productError,
  } = useQuery(GET_PRODUCT_BY_PK, {
    variables: { uuid },
  });

  return (
    <>
      {isProductLoading && <LoadingComponent />}

      <div className="productDetail-layout">
        <div className="productDetail-content">
          <Image
            src={productData?.product_by_pk?.productImage}
            alt="Product Image"
          />
          <div className="productDetail-desc">
            <div className="productDetail-productName">
              <h1>{productData?.product_by_pk?.productName}</h1>
            </div>
            <Gap height={20} />

            <div className="productDetail-about">
              <h3>Product Detail</h3>
              <Gap height={15} />
              <p>{productData?.product_by_pk?.productDescription}</p>
            </div>

            <Gap height={25} />
            <div className="productDetail-price">
              <div className="productDetail-price2">
                <p>Stock : {productData?.product_by_pk?.productQuantity}</p>
                <Gap height={15} />
                <p>
                  Harga : {RUPIAH(productData?.product_by_pk?.productPrice)}
                </p>
              </div>

              <div className="productDetail-price3">
                <p>Pesan Sekarang :</p>
                <a href="https://wa.link/0oh9ok" target="_b">
                  <img src={WhatAppsIcon} alt="WhatApps Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
