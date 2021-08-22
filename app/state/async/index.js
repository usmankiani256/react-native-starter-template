import AsyncStorage from '@react-native-community/async-storage'
import Item from './items'

const useAsync = () => {
  async function set(item, data) {
    data = JSON.stringify(data)

    await AsyncStorage.setItem(item, data)
    console.debug(`Async:\nItem "${item}" set to ${data}`)
  }

  async function get(item) {
    const data = await AsyncStorage.getItem(item)
    return JSON.parse(data)
  }

  async function remove(item) {
    return await AsyncStorage.removeItem(item)
  }

  return { get, set, remove, Item }
}

export default useAsync
