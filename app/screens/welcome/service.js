import { useEffect, useState } from 'react'
import useAsync from '@state/async'

const useService = props => {
  const [welcomeText, setWelcomeText] = useState('')

  const updateWelcomeText = user => {
    user
      ? setWelcomeText('Welcome back to React Native Starter Kit')
      : setWelcomeText('Welcome to React Native Starter Kit')
  }

  useEffect(() => {
    let { get, set, Item } = useAsync()

    get(Item.USER).then(user => {
      updateWelcomeText(user)
      set(Item.USER, true)
    })
  }, [])

  return { welcomeText }
}

export default useService
