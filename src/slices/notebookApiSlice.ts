/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotebookCardsProps } from "src/components/notebook/NotebookCards";
import { apiSlice } from "./apiSlice";
import { transformNotebookApiResponse as transformNotebookApiResponseToNoteBookCards } from "./apiUtils";

const NOTEBOOKS_URL = "/api/notebooks/";

interface baseApiResponse {
  success: boolean;
  data: unknown[];
}

export interface PageFromServer {
  contents: {
    data: string;
    format: "h1" | "h2" | "h3";
  }[];
  notebook: string;
  _id: string;
  title: string;
}

export interface NotebookFromServer {
  _id: string;
  title: string;
  user: string;
  pages: PageFromServer[];
}

export interface NotebookPreviewRes extends baseApiResponse {
  data: NotebookFromServer[];
}

const notebookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotebookForUser: builder.query<NotebookCardsProps[], void>({
      query: () => `${NOTEBOOKS_URL}/preview`,
      transformResponse: (res: NotebookPreviewRes) => {
        return transformNotebookApiResponseToNoteBookCards(res);
      },
    }),

    getNotebookById: builder.query<NotebookFromServer, string>({
      query: (notebookId) => `${NOTEBOOKS_URL}/${notebookId}`,
      transformResponse: (response: {
        data: NotebookFromServer;
      }): NotebookFromServer => response.data,
    }),

    createNotebook: builder.mutation<
      { success: boolean; data: NotebookFromServer },
      { title: string }
    >({
      query: (req) => ({
        url: `${NOTEBOOKS_URL}/`,
        method: "POST",
        body: {
          title: req.title,
        },
      }),
    }),
  }),
});

export const {
  useGetNotebookForUserQuery,
  useCreateNotebookMutation,
  useGetNotebookByIdQuery,
} = notebookApiSlice;
