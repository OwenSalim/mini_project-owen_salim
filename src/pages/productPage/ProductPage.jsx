import { Typography } from "antd";
import React, { useState } from "react";
import "./productPage.css";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../adminProduct/query/product-query";
import { Card, List, Input, Button, Select } from "antd";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import { RUPIAH } from "../../components/currency";
import { Link } from "react-router-dom";
import Gap from "../../components/gap/Gap";
import { SearchOutlined } from "@ant-design/icons";
import { Rate } from "antd";

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

  const selectCategory = (category) => {
    const value = category.value;

    setData(
      productData?.product.filter((item) => {
        const isMatchProduct = value
          ? item.productCategory.includes(value)
          : true;

        return isMatchProduct;
      })
    );
  };

  return (
    <div className="productPage-layout">
      <div>
        <Title>Product List</Title>
        <div className="searchBar">
          <Input
            placeholder="Search By Name"
            prefix={<SearchOutlined />}
            onChange={handleSearch}
            style={{
              width: "50%",
            }}
          />
          <Gap height={20} />

          <Select
            placeholder="Search By Category"
            labelInValue
            onChange={selectCategory}
            style={{
              width: "50%",
            }}
            options={[
              {
                value: "",
                label: "",
              },
              {
                value: "Processor",
                label: "Processor",
              },
              {
                value: "Motherboard",
                label: "Motherboard",
              },
              {
                value: "RAM",
                label: "RAM",
              },
              {
                value: "PSU",
                label: "PSU",
              },
              {
                value: "VGA",
                label: "VGA",
              },
              {
                value: "SSD",
                label: "SSD",
              },
            ]}
          />
        </div>

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

                <Gap height={10} />
                <div className="productPrice">
                  <div>
                    <Rate allowHalf disabled value={item.productStar} />
                    <p>Stock : {item.productQuantity}</p>
                    <p>Harga : {RUPIAH(item.productPrice)}</p>
                  </div>

                  <Link className="buy-button" to={`/productpage/${item.uuid}`}>
                    <Button>
                      <strong>More</strong>
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
