import { CogIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateNotebookPageByIdMutation } from "src/slices/notebookPageApiSlice";

const NewPageCard: FC<{ notebookId: string }> = ({ notebookId }) => {
  const [trigger, { isLoading, data }] = useCreateNotebookPageByIdMutation();

  const navigate = useNavigate();

  if (data?.success) {
    navigate(`/notebook/${notebookId}/page/${data.page._id}`);
  }

  return (
    <div className="w-64 h-64 flex justify-center items-center bg-gray-200 rounded-md cursor-pointer">
      <div
        className="flex"
        onClick={async () => {
          await trigger({ notebookId, title: "Untitled" });
        }}
      >
        {isLoading ? <CogIcon width={"24"} /> : <PlusIcon width={"24"} />}
        <p className="text-xl">Add Page</p>
      </div>
    </div>
  );
};

export default NewPageCard;
