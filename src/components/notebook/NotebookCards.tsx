import { FC } from "react";
import PageCard, { PageCardProps } from "./PageCard";

export interface NotebookCardsProps {
  title: string;
  pageCards: PageCardProps[];
  notebookId: string;
}

const NotebookCards: FC<NotebookCardsProps> = ({ title, pageCards: cards }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex gap-8 overflow-scroll max-w-screen-xl">
        {cards.map((page) => (
          <PageCard
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
