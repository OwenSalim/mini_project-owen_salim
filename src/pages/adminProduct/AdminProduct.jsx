import React, { useEffect } from "react";
import { Form, Typography, Input, Button, Table, InputNumber } from "antd";
import "./adminProduct.css";
import Gap from "../../components/gap/Gap";
import { TABLE_COLUMNS } from "./constans";
import { useNavigate } from "react-router-dom";

const AdminProduct = () => {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
  };

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
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            initialValues={{
              remember: true,
            }}
            style={{
              maxWidth: 600,
            }}
            autoComplete="off"
            onFinish={onFinish}
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
                {
                  whitespace: true,
                },
                { min: 1 },
              ]}
              hasFeedback
            >
              <Input />
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
              <InputNumber min={1} />
            </Form.Item>

            <Form.Item
              label="Product Image"
              name="ProductImage"
              //   rules={[
              //     {
              //       required: true,
              //       message: "Please input your product image!",
              //     },
              //   ]}
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
                { min: 20 },
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
      <Table columns={TABLE_COLUMNS} />
    </div>
  );
};

export default AdminProduct;
