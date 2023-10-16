import { FC } from "react";
import NotebookCards, { NotebookCardsProps } from "./NotebookCards";
import StududeHeading from "../common/StududeHeading";
import { useNavigate } from "react-router-dom";

interface NotebooksCardsContainerProps {
  notebooks: NotebookCardsProps[];
}

const NotebooksCardsContainer: FC<NotebooksCardsContainerProps> = ({
  notebooks,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {notebooks.map((notebook) => (
        <div className="flex flex-col gap-4" key={notebook.notebookId}>
          <StududeHeading
            title={notebook.title}
            onClick={() => {
              navigate(`/notebook/${notebook.notebookId}`);
            }}
          />
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
