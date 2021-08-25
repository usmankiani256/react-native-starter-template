import { useQuery } from '@apollo/client'
import { GET_USERS_QUERY } from '@services/queries'

export default useUsers = () => {
  const getUsers = useQuery(GET_USERS_QUERY)

  return { getUsers }
}
