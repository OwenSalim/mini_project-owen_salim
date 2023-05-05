import React, { useEffect } from "react";
import {
  Form,
  Typography,
  Input,
  Button,
  Table,
  InputNumber,
  message,
  Select,
} from "antd";
import "./adminProduct.css";
import Gap from "../../components/gap/Gap";
import { TABLE_COLUMNS } from "./constans";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PRODUCT, GET_PRODUCT } from "./query/product-query";

const AdminProduct = () => {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const { TextArea } = Input;

  const onAdd = (values) => {
    const body = {
      ...values,
    };
    addProduct({
      variables: {
        object: {
          ...body,
        },
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });

    form.resetFields();
  };

  //Get Data
  const {
    data: productData,
    loading: isProductLoading,
    erorr: productError,
  } = useQuery(GET_PRODUCT);

  //Add Data
  const [addProduct, { loading: loadingAddProduct }] = useMutation(
    ADD_PRODUCT,
    {
      refetchQueries: [GET_PRODUCT],
    }
  );

  return (
    <div className="form-layout">
      <div className="form-content">
        <div className="form-form">
          <Title className="form-title">Form Product</Title>
          <Gap height={30} />

          {/* FORM */}
          <Form
            form={form}
            name="formProduct"
            layout="horizontal"
            labelAlign="left"
            labelCol={{
              span: 7,
            }}
            wrapperCol={{
              span: 15,
            }}
            initialValues={{
              remember: true,
            }}
            style={{
              maxWidth: 600,
            }}
            autoComplete="off"
            onFinish={onAdd}
          >
            <Form.Item
              label="Product Name"
              name="productName"
              rules={[
                {
                  required: true,
                  message: "Please input your product name!",
                },
                {
                  whitespace: true,
                },
                { min: 5 },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Product Quantity"
              name="productQuantity"
              rules={[
                {
                  required: true,
                  message: "Please input your product quantity!",
                },
              ]}
              hasFeedback
            >
              <InputNumber
                min={1}
                style={{
                  width: 130,
                }}
              />
            </Form.Item>

            <Form.Item
              label="Product Category"
              name="productCategory"
              rules={[
                {
                  required: true,
                  message: "Please select your product category!",
                },
              ]}
              hasFeedback
            >
              <Select
                options={[
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
            </Form.Item>

            <Form.Item
              label="Product Price"
              name="productPrice"
              rules={[
                {
                  required: true,
                  message: "Please input your product price!",
                },
              ]}
              hasFeedback
            >
              <InputNumber
                min={1}
                style={{
                  width: 130,
                }}
              />
            </Form.Item>

            <Form.Item
              label="Product Image"
              name="productImage"
              rules={[
                {
                  required: true,
                  message: "Please input your product image!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Product Description"
              name="productDescription"
              rules={[
                {
                  required: true,
                  message: "Please input your product description!",
                },
                {
                  whitespace: true,
                },
                { min: 10 },
              ]}
              hasFeedback
            >
              <TextArea showCount maxLength={100} rows={4} />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
          {/* FORM END */}
        </div>
      </div>
      <Gap height={50} />
      <Table
        rowKey="uuid"
        columns={TABLE_COLUMNS}
        loading={isProductLoading}
        dataSource={productData?.product}
      />
    </div>
  );
};

export default AdminProduct;
