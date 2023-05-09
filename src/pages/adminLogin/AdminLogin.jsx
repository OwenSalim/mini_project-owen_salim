import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Row, Radio, Modal, message } from "antd";
import Gap from "../../components/gap/Gap";
import { useNavigate } from "react-router-dom";
import "./adminLogin.css";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_ADMIN, GET_ADMIN } from "./query/admin-query";

const AdminLogin = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [section, setSection] = useState("Login");

  // GraphQL
  const {
    data: adminData,
    loading: isAdminLoading,
    error: isAdminError,
  } = useQuery(GET_ADMIN);

  // console.log(adminData?.admin);

  const [register, { loading: isRegisterLoading }] = useMutation(ADD_ADMIN, {
    refetchQueries: [GET_ADMIN],
  });

  const onRegister = (values) => {
    const admin = [...adminData.admin];

    //Mengecek user apaka existed
    const isExisted = admin?.some((item) => item.username === values.username);

    if (!isExisted) {
      register({
        variables: {
          object: {
            ...values,
          },
        },
        onError: (err) => {
          message.open({
            type: "error",
            content: `${err.message}`,
          });
        },
        onCompleted: () => {
          Modal.success({
            title: "Register Success!!",
            content: "Please login after register",
            centered: true,
            onOk() {
              form.resetFields();
              setSection("Login");
            },
          });
        },
      });
    } else {
      Modal.warning({
        title: "Register Failed !!",
        content: "Your username has already been used!",
        centered: true,
      });
    }
  };

  const onChange = ({ target: { value } }) => {
    setSection(value);
    form.resetFields();
  };

  const onLogin = (values) => {
    const admin = [...adminData.admin];

    //Mengecek user apaka existed
    const isAdmin = admin?.find((admin) => admin.username === values.username);

    // const newValues = {
    //   __typename: "admin",
    //   password: values.password,
    //   username: values.username,
    // };

    // console.log(newValues);
    // console.log(isAdmin)

    // //Mengecek user terverifikasi
    // const isVerified = JSON.stringify(newValues) === JSON.stringify(isAdmin);

    if (isAdmin) {
      localStorage.setItem("token", true);
      navigate("/adminproduct");
    } else {
      Modal.warning({
        title: "Login Failed!",
        content: "Username/Password is not correct",
        centered: true,
        onOk() {
          setSection("Login");
        },
      });
    }
  };

  return (
    <div className="adminLogin-container">
      <Card title="Admin Login" bodyStyle={{ width: "500px" }}>
        <Row justify="center">
          <Radio.Group
            defaultValue="Login"
            buttonStyle="solid"
            onChange={onChange}
            value={section}
          >
            <Radio.Button value="Login">Login Here</Radio.Button>
            <Radio.Button value="Register">Register Here</Radio.Button>
          </Radio.Group>
        </Row>

        <Gap height={20} />

        <Form
          name="login-form"
          form={form}
          onFinish={section === "Login" ? onLogin : onRegister}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={isRegisterLoading}
            block
          >
            {section === "Login" ? "Login" : "Register"}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AdminLogin;
