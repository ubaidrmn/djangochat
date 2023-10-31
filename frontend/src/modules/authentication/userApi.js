import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../app/constants'

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_BASE_URL,
    headers: {
      // "Authorization": "",
      'content-type': 'application/json'
    }
   }),
  endpoints: (builder) => ({
    // getActiveUser: builder.query({
    //   query: () => `accounts/active-user`,
    // }),
    createUser: builder.mutation({
      query: (body) => ({
        url: `accounts/users/register-user/`,
        method: 'POST',
        body,
        invalidatesTags: ["Post"],
      }),
    })
  }),
})

export const { useCreateUserMutation } = userApi
