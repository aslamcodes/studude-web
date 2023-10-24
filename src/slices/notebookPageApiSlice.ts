import { apiSlice } from "./apiSlice";
import { PageFromServer } from "./notebookApiSlice";

const NOTEBOOK_PAGE_URL = "/api/notebooks";

const notebookPageApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createNotebookPageById: build.mutation<
      { success: boolean; page: PageFromServer },
      { title: string; notebookId: string }
    >({
      query: (req) => {
        console.log(req);
        return {
          url: `${NOTEBOOK_PAGE_URL}/${req.notebookId}/page`,
          method: "POST",
          body: {
            title: req.title,
          },
        };
      },
    }),
  }),
});

export const { useCreateNotebookPageByIdMutation } = notebookPageApiSlice;
