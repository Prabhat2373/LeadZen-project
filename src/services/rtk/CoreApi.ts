import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const CoreApi = createApi({
    reducerPath: 'coreApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://leadzen-dev.analystt.ai/api/sme_companies/react_challenge' }),
    endpoints: (builder) => ({
        Test: builder.query({
            query: () => ({
                url: "/"
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useTestQuery } = CoreApi;