import { gql } from "@apollo/client";

export const GET_ALL_LAUNCHES = gql`
  query gg {
    launches {
      id
    }
  }
`;
