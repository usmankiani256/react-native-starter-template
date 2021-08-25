import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUser } from '@services/core'

const useService = props => {
  const dispatch = useDispatch()

  const { getUser } = useUser()

  return { getUser }
}

export default useService
