import { gql } from '@apollo/client'

export const GET_USERS_QUERY = gql`
  query {
    users {
      data {
        id
        name
        email
      }
    }
  }
`
