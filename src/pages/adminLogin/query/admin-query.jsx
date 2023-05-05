import { gql } from "@apollo/client";

export const GET_ADMIN = gql`
  query admin {
    admin {
      password
      username
    }
  }
`;

export const ADD_ADMIN = gql`
  mutation admin($object: admin_insert_input!) {
    insert_admin_one(object: $object) {
      uuid
      username
    }
  }
`;
