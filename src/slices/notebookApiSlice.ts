/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotebookCardsProps } from "src/components/notebook/NotebookCards";
import { apiSlice } from "./apiSlice";
import { PageCardProps } from "src/components/notebook/PageCard";
import { transformNotebookApiResponse as transformNotebookApiResponseToNoteBookCards } from "./apiUtils";

const NOTEBOOKS_URL = "/api/notebooks/";

interface baseApiResponse {
  success: boolean;
  data: unknown[];
}

interface ContentApiRes {
  data: string;
  format: "h1" | "h2" | "h3";
}

export interface PageApiRes {
  contents: ContentApiRes[]; // You might want to replace `any[]` with a more specific type if possible
  _id: string;
  title?: string; // This field seems to be optional based on your data
}

interface Notebook {
  _id: string;
  title: string;
  user: string;
  page: PageApiRes[];
  __v: number;
}

export interface NotebookPreviewRes extends baseApiResponse {
  data: Notebook[];
}

const notebookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotebookForUser: builder.query<NotebookCardsProps[], void>({
      query: () => `${NOTEBOOKS_URL}/preview`,
      transformResponse: (res: NotebookPreviewRes) => {
        return transformNotebookApiResponseToNoteBookCards(res);
      },
    }),

    createNotebook: builder.mutation<
      { success: boolean; data: Notebook },
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

export const { useGetNotebookForUserQuery, useCreateNotebookMutation } =
  notebookApiSlice;
