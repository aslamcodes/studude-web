import { apiSlice } from "./apiSlice";

const NOTEBOOK_PAGE_URL = "/api/notebooks";

const notebookPageApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createNotebookPageById: build.mutation<
      void,
      { title: string; notebookId: string }
    >({
      query: (req) => ({
        url: `${NOTEBOOK_PAGE_URL}/${req.notebookId}/page`,
        method: "POST",
        body: {
          title: req.title,
        },
      }),
    }),
  }),
});

export const { useCreateNotebookPageByIdMutation } = notebookPageApiSlice;
