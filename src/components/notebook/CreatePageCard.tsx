import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import React from "react";

const CreatePageCard = () => {
  return (
    <div className=" w-64 h-64 flex items-center justify-center rounded-md shadow-md">
      <DocumentPlusIcon width={48} height={48} className="text-sgray" />
    </div>
  );
};

export default CreatePageCard;
