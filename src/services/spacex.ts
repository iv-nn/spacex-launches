import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Launch } from '../types/launch'

export const spacexApi = createApi({
    reducerPath: 'spacexApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v3' }),
    endpoints: (builder) => ({
        getPastLaunches: builder.query<Array<Launch>, number | void>({
            query: (limit: number = 10) => `launches/past?order=desc&limit=${limit}`
        }),
        getNextLaunch: builder.query<Launch, void>({
            query: () => `launches/next`
        })
    })
})

export const { useGetPastLaunchesQuery, useGetNextLaunchQuery } = spacexApi
