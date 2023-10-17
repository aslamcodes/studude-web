import { CogIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateNotebookPageByIdMutation } from "src/slices/notebookPageApiSlice";

const CreatePageCard: FC<{ notebookId: string }> = ({ notebookId }) => {
  const [trigger, { isLoading, data }] = useCreateNotebookPageByIdMutation();

  const navigate = useNavigate();

  if (data?.success) {
    navigate(`/notebook/${notebookId}/page/${data.page._id}`);
  }
  return (
    <div
      className=" w-64 h-64 flex items-center justify-center rounded-md shadow-md cursor-pointer"
      onClick={async () => {
        await trigger({ notebookId, title: "Untitled" });
      }}
    >
      {isLoading ? (
        <CogIcon width={"24"} />
      ) : (
        <DocumentPlusIcon width={48} height={48} className="text-sgray" />
      )}
    </div>
  );
};

export default CreatePageCard;
