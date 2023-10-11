import { NotebookCardsProps } from "src/components/notebook/NotebookCards";
import { NotebookPreviewRes, PageApiRes } from "./notebookApiSlice";
import { PageCardProps } from "src/components/notebook/PageCard";

export const transformNotebookApiResponse = (
  apiResponse: NotebookPreviewRes
): NotebookCardsProps[] => {
  return apiResponse.data.map((notebook) => ({
    title: notebook.title,
    notebookId: notebook._id,
    pageCards: transformPageApiResponse(notebook.page),
  }));
};

const transformPageApiResponse = (pages: PageApiRes[]): PageCardProps[] => {
  return pages.map((page) => ({
    title: page.title || "", // Handle the case where title is optional
    contentPeek: page.contents.map((content) => content.data),
    pageId: page._id,
  }));
};
