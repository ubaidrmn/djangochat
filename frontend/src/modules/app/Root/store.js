import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../../authentication/userSlice";
import { userApi } from '../../authentication/userApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})
