import { Typography } from "antd";
import React, { useState } from "react";
import "./productPage.css";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../adminProduct/query/product-query";
import { Card, List, Input, Button } from "antd";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import { RUPIAH } from "../../components/currency";
import { Link } from "react-router-dom";
import Gap from "../../components/gap/Gap";
import { SearchOutlined } from "@ant-design/icons";

const ProductPage = () => {
  const { Title } = Typography;

  //Get Data
  const {
    data: productData,
    loading: isProductLoading,
    erorr: productError,
  } = useQuery(GET_PRODUCT);

  //Search
  const [data = productData?.product, setData] = useState();

  const handleSearch = (e) => {
    const value = e.target.value;

    setData(
      productData?.product.filter((item) => {
        const isMatchProduct = value
          ? item.productName.toLowerCase().includes(value.toLowerCase())
          : true;

        return isMatchProduct;
      })
    );
  };
  return (
    <div className="productPage-layout">
      <div>
        <Title>Product List</Title>
        <Input
          placeholder="Search Product Here"
          prefix={<SearchOutlined />}
          onChange={handleSearch}
        />

        <Gap height={25} />
        {isProductLoading && <LoadingComponent />}
        <List
          grid={{
            gutter: 15,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={data}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 8,
          }}
          renderItem={(item) => (
            <List.Item key={item.uuid}>
              <Card className="productPage-card">
                <div className="productPage-productName">
                  {item.productName}
                </div>

                <Gap height={25} />
                <div className="productPage-item">
                  <img
                    src={item.productImage}
                    alt="Product"
                    className="productPage-image"
                  />
                </div>

                <Gap height={30} />
                <div className="productPrice">
                  <div>
                    <p>Stock : {item.productQuantity}</p>
                    <p>Harga : {RUPIAH(item.productPrice)}</p>
                  </div>

                  <Link to={`/productpage/${item.uuid}`}>
                    <Button>
                      <strong>Buy Now</strong>
                    </Button>
                  </Link>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ProductPage;
