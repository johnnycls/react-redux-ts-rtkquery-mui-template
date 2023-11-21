import { apiSlice } from "./apiSlice";

type apiResponse = { data: string };

const sampleAPISlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAPIData: builder.query<apiResponse, {}>({
      query: () => `api.json`,
      transformResponse: (responseData: apiResponse) => {
        return responseData;
      },
    }),
    // Mutations (post, patch, delete): https://redux-toolkit.js.org/rtk-query/usage/mutations
    // Customize Queries: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries
  }),
  overrideExisting: false,
});

export const { useGetAPIDataQuery } = sampleAPISlice;
