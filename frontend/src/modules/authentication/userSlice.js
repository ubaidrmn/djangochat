import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  username: null,
  email: null,
  is_staff: null,
  is_superuser: null,
  fullname: null,
  loggedIn: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer
