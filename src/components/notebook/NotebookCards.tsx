/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import PageCard, { PageCardProps } from "./PageCard";
import { useNavigate } from "react-router-dom";
export interface NotebookCardsProps {
  title: string;
  pageCards: PageCardProps[];
  notebookId: string;
}

const NotebookCards: FC<NotebookCardsProps> = ({
  title,
  pageCards: cards,
  notebookId,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-8 overflow-scroll max-w-screen-xl">
        {cards.map((page) => (
          <PageCard
            onClick={() => {
              navigate(`/notebook/${notebookId}/page/${page.pageId}`);
            }}
            key={page.pageId}
            pageId={page.pageId}
            title={page.title}
            contentPeek={page.contentPeek}
          />
        ))}
      </div>
    </div>
  );
};

export default NotebookCards;
