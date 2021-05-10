import { gql } from "@apollo/client";

export const GET_ALL_LAUNCHES = gql`
  query gg {
    launches {
      id
      mission_id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_success
    }
  }
`;
