import React, { FC } from "react";
import {
  ArrowPathRoundedSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export interface RecapCardProps {
  recapTitle: string;
  lastRevisited: Date;
  notebookId: string;
  isRevised: boolean;
}

const RecapCard: FC<RecapCardProps> = ({
  recapTitle,
  lastRevisited,
  notebookId,
  isRevised,
}) => {
  return (
    <div
      className={`flex justify-between w-72 gap-3 shadow-md p-3 ${
        isRevised ? "shadow-primary" : "shadow"
      } border rounded-md `}
    >
      <div className="flex flex-col">
        <p className="text-2xl">
          {recapTitle.length > 15
            ? recapTitle.slice(0, 19).trim() + "..."
            : recapTitle}
        </p>
        <p className="text-sm text-gray-400">
          Last Revised{" "}
          {new Date().getDay() === lastRevisited.getDay()
            ? "Today"
            : lastRevisited.getDay()}
        </p>
      </div>
      {isRevised ? (
        <CheckCircleIcon width={24} className="text-primary" />
      ) : (
        <ArrowPathRoundedSquareIcon
          width={24}
          className="hover:text-accent transition-all "
        />
      )}
    </div>
  );
};

export default RecapCard;
