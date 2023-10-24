import { apiSlice } from "./apiSlice";
const RECAPS_URL = "/api/recaps";

export interface RecapFromServerI {
  _id: string;
  user: string;
  notebook: string;
  page: {
    _id: string;
    title: string;
  };
  repetition: number;
  easeFactor: number;
  nextRepetition: Date;
  interval: number;
  isRevised: boolean;
}

const recapsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecapForUser: builder.query<
      { success: boolean; data: RecapFromServerI[] },
      { notebookId?: string; pageId?: string }
    >({
      query: ({ notebookId = null, pageId = null }) => {
        const queryParams = new URLSearchParams();
        if (notebookId) {
          queryParams.append("notebookId", notebookId);
        } else if (pageId) {
          queryParams.append("pageId", pageId);
        }

        return {
          url: `${RECAPS_URL}?${queryParams.toString()}`,
        };
      },
    }),
  }),
});

export const { useGetRecapForUserQuery } = recapsApiSlice;
