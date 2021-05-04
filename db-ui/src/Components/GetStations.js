import React from 'react'

import {useQuery, gql}from '@apollo/client'
import {FIND_STATION} from '../GraphQL/Queries'


function GetStations() {
  const { loading, error, data } = useQuery(FIND_STATION, {
    variables: { searchTerm: 'Berlin' },
  });
  if (loading) return <p>Loading ...</p>;
  if(error) return <p>Error ...</p>;
  return <h1>{data}</h1>;
    }
    
export default GetStations
