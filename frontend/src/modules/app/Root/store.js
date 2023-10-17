import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../../authentication/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})
