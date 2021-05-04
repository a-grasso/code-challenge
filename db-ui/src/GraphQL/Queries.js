import {gql} from '@apollo/client'

export const FIND_STATION = gql`
  query gg {
  search(searchTerm: "Berlin") {
    stations{
      name
    }
  }
}
`;