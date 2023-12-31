import { FC } from "react";
import NotebookCards, { NotebookCardsProps } from "./NotebookCards";

interface NotebooksCardsContainerProps {
  notebooks: NotebookCardsProps[];
}

const NotebooksCardsContainer: FC<NotebooksCardsContainerProps> = ({
  notebooks,
}) => {
  return (
    <>
      {notebooks.map((notebook) => (
        <div className="flex flex-col gap-4" key={notebook.notebookId}>
          <NotebookCards
            notebookId={notebook.notebookId}
            key={notebook.notebookId}
            title={notebook.title}
            pageCards={notebook.pageCards}
          />
        </div>
      ))}
    </>
  );
};

export default NotebooksCardsContainer;
