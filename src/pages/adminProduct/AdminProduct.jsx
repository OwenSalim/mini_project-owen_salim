import React, { useEffect, useState } from "react";
import {
  Form,
  Typography,
  Input,
  Button,
  Table,
  InputNumber,
  message,
  Select,
  Popconfirm,
  Space,
  Upload,
} from "antd";
import { Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./adminProduct.css";
import Gap from "../../components/gap/Gap";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
} from "./query/product-query";
import { INITIAL_TABLE_DATA } from "./constans";
import { useSingleUploader } from "../../hooks/useSingleUploader";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import { uploaderConfig } from "../../config/uploader-config";
import Swal from "sweetalert2";

const AdminProduct = () => {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const { TextArea } = Input;

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

  // Delete Data
  const [deleteProduct, { loading: loadingDelete }] = useMutation(
    DELETE_PRODUCT,
    {
      refetchQueries: [GET_PRODUCT],
    }
  );

  // Update Data
  const [updateProduct, { loading: loadingUpdateProduct }] = useMutation(
    UPDATE_PRODUCT,
    {
      refetchQueries: [GET_PRODUCT],
    }
  );

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  //Add Data to table
  const onAdd = (values) => {
    const body = {
      productImage: productImage,
      ...values,
    };
    addProduct({
      variables: {
        object: {
          ...body,
        },
      },
      onCompleted: () => {
        Swal.fire({
          icon: "success",
          title: `Add Data is Success!!`,
        });
        handleCancel();
      },
      onError: (err) => {
        Swal.fire({
          icon: "error",
          title: `${err?.Swal}`,
        });
      },
    });
  };

  //Delete Data from table
  const onDelete = (row_id) => {
    deleteProduct({
      variables: { uuid: row_id },
      onError: (err) => {
        Swal.fire({
          icon: "error",
          title: `${err?.Swal}`,
        });
      },
    });
  };

  //Edit Data from table
  const onEdit = (values) => {
    const uuid = rowData.uuid;
    const body = {
      productImage: productImage,
      ...values,
    };

    updateProduct({
      variables: { pk_columns: { uuid: uuid }, _set: { ...body } },
      onCompleted: () => {
        Swal.fire({
          icon: "success",
          title: `Update Data is Success!!`,
        });
        handleCancel();
      },
      onError: (err) => {
        Swal.fire({
          icon: "error",
          title: `${err?.Swal}`,
        });
      },
    });
  };

  //   to handle edit button
  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
    setProductImage(row_data.productImage);
    form.setFieldsValue({
      productName: row_data.productName,
      productQuantity: row_data.productQuantity,
      productCategory: row_data.productCategory,
      productPrice: row_data.productPrice,
      productDescription: row_data.productDescription,
    });
  };

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setProductImage("");
    setIsEdit(false);
    form.resetFields();
  };

  // Upload Image
  const [isLoadingUpload, uploadFile] = useSingleUploader();
  const [productImage, setProductImage] = useState("");

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // to handle Upload Image
  const handleUpload = async (file) => {
    const body = {
      file: await getBase64(file.file.originFileObj),
      upload_preset: uploaderConfig.upload_preset,
      public_id: file.file.name.replace(/\.[^.]*$/, ""),
      api_key: uploaderConfig.api_key,
    };
    uploadFile(body, (data) => {
      setProductImage(data.url);
    });
  };

  //Preview Image
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
  };

  useEffect(() => {
    if (productError) {
      message.open({
        type: "error",
        content: `${productError?.message}`,
      });
    }
  }, [productError]);

  const TABLE_COLUMNS = [
    {
      title: "Product Image",
      dataIndex: "productImage",
      key: "productImage",
      render: (_, record, index) => (
        <Image
          src={record.productImage}
          alt={`productImage-${index}`}
          style={{ height: "100px" }}
        />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Product Quantity",
      dataIndex: "productQuantity",
      key: "productQuantity",
    },
    {
      title: "Product Category",
      dataIndex: "productCategory",
      key: "productCategory",
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Product Description",
      dataIndex: "productDescription",
      key: "productDescription",
    },
    {
      title: "Product Rating",
      dataIndex: "productStar",
      key: "productStar",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a onClick={() => handleEdit(record)}>
              <div className="edit-button">Edit</div>
            </a>
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.uuid)}
            >
              <div className="delete-button">
                <a>Delete</a>
              </div>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

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
            onFinish={isEdit ? onEdit : onAdd}
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

            <Form.Item label="Product Image">
              <Upload
                showUploadList={false}
                name="file"
                maxCount={1}
                onRemove={() => {
                  setProductImage("");
                }}
                customRequest={() => {}}
                onChange={handleUpload}
                onPreview={handlePreview}
              >
                <Button
                  icon={<UploadOutlined />}
                  type={!productImage ? "dashed" : "default"}
                >
                  {productImage
                    ? "Change Product Image"
                    : "Upload Product Image"}
                </Button>
              </Upload>

              {isLoadingUpload ? (
                <LoadingComponent />
              ) : (
                productImage && (
                  <div>
                    <Gap height={20} />
                    <Image
                      src={productImage}
                      alt="productImage"
                      style={{
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                )
              )}
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
              <TextArea showCount rows={8} />
            </Form.Item>

            <Form.Item
              label="Product Rating"
              name="productStar"
              rules={[
                {
                  required: true,
                  message: "Please input your product rating!",
                },
              ]}
              hasFeedback
            >
              <InputNumber
                min={1}
                max={5}
                style={{
                  width: 130,
                }}
              />
            </Form.Item>

            {isEdit ? (
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loadingUpdateProduct}
                >
                  Save
                </Button>
                <Button type="primary" onClick={handleCancel} danger>
                  Cancel
                </Button>
              </Space>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                loading={loadingAddProduct}
              >
                Submit
              </Button>
            )}
          </Form>
          {/* FORM END */}
        </div>
      </div>
      <Gap height={50} />
      <Table
        rowKey="uuid"
        columns={TABLE_COLUMNS}
        loading={isProductLoading || loadingDelete}
        dataSource={productData?.product}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
      />
    </div>
  );
};

export default AdminProduct;
