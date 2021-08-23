import { useEffect, useState } from 'react'
import useAsync from '@async'
import { setMessage } from '@redux/Message'
import { useDispatch, useSelector } from 'react-redux'

const useService = props => {
  const dispatch = useDispatch()

  const { message } = useSelector(state => state.message)

  const updateWelcomeText = () => {
    dispatch(setMessage('Welcome back to React Native Starter Kit'))
  }

  useEffect(() => {
    let { get, set, Item } = useAsync()

    get(Item.USER).then(user => {
      user && updateWelcomeText()
      set(Item.USER, true)
    })
  }, [])

  return { message }
}

export default useService
