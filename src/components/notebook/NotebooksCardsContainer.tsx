import { FC } from "react";
import NotebookCards, { NotebookCardsProps } from "./NotebookCards";
import StududeHeading from "../common/StududeHeading";

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
          <StududeHeading title={notebook.title} />
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
