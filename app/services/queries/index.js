import { gql } from '@apollo/client'

export const GET_USER_QUERY = gql`
  query {
    user(id: 1) {
      id
      name
      username
    }
  }
`
