import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query product {
    product(order_by: { timeStamp: asc }) {
      productDescription
      productCategory
      productImage
      productName
      productPrice
      productQuantity
      timeStamp
      uuid
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation product($object: product_insert_input!) {
    insert_product_one(object: $object) {
      uuid
      productName
    }
  }
`;
