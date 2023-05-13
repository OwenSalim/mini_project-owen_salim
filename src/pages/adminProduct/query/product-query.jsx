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
      productStar
      timeStamp
      uuid
    }
  }
`;

export const GET_PRODUCT_BY_PK = gql`
  query product($uuid: uuid!) {
    product_by_pk(uuid: $uuid) {
      productCategory
      productDescription
      productImage
      productName
      productPrice
      productQuantity
      productStar
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

export const UPDATE_PRODUCT = gql`
  mutation product(
    $pk_columns: product_pk_columns_input!
    $_set: product_set_input!
  ) {
    update_product_by_pk(pk_columns: $pk_columns, _set: $_set) {
      uuid
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation product($uuid: uuid!) {
    delete_product_by_pk(uuid: $uuid) {
      uuid
    }
  }
`;
