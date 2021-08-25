import { useQuery } from '@apollo/client'
import { GET_USER_QUERY } from '@services/queries'

export default useUser = () => {
  const getUser = useQuery(GET_USER_QUERY)

  return { getUser }
}
