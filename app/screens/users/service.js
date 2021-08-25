import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUsers } from '@services/core'

const useService = props => {
  const dispatch = useDispatch()

  const { getUsers } = useUsers()

  return { getUsers }
}

export default useService
