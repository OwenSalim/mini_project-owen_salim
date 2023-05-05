import { Popconfirm, Space } from "antd";

export const TABLE_COLUMNS = [
  {
    title: "Product Image",
    dataIndex: "productImage",
    key: "productImage",
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
    title: "Action",
    dataIndex: "action",
    render: (_, record) =>
      INITIAL_TABLE_DATA.length >= 1 ? (
        <Space>
          {/* <a onClick={() => handleEdit(record)}>Edit</a> */}
          <a>Edit</a>
          <Popconfirm
            title="Sure to delete?"
            arrow={false}
            // onConfirm={() => onDelete(record.uuid)}
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ) : null,
  },
];

export const INITIAL_TABLE_DATA = [
  {
    key: 1,
    productName: "RTX 2080",
    productQuantity: "5",
    productPrice: 8000000,
    productImage: "test",
    productDescription: "Sangat Cepat dan Mantap",
  },
];
