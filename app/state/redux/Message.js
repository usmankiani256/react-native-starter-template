import { createSlice } from '@reduxjs/toolkit'

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: 'Welcome to React Native Starter Kit',
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload
    },
  },
})

export const { setMessage } = messageSlice.actions
export default messageSlice.reducer
