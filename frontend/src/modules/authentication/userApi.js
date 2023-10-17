import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../app/constants'

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_BASE_URL,
    headers: {
      "Authorization": ""
    }
   }),
  endpoints: (builder) => ({
    getActiveUser: builder.query({
      query: () => `accounts/active-user`,
    }),
  }),
})

export const { useGetActiveUserQuery } = pokemonApi
