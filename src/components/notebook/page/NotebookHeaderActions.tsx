"use client";
import {
  ClockIcon,
  QueueListIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";

const NotebookHeaderActions = () => {
  return (
    <div className="flex flex-col gap-1.5 text-gray-400 my-3">
      <NotebookAction
        action="Take a quick quiz"
        icon={QueueListIcon}
        onClick={() => {}}
      />
      <NotebookAction
        action="View flashcards"
        icon={Square3Stack3DIcon}
        onClick={() => {}}
      />
      <NotebookAction action="Schedules" icon={ClockIcon} onClick={() => {}} />
    </div>
  );
};

const NotebookAction: FC<{
  icon: React.FC<any>;
  action: string;
  onClick?: () => void;
}> = ({
  icon: Icon,
  action: title,
  onClick = () => alert("Function not mapped"),
}) => {
  return (
    <li
      className="flex items-center gap-1 text-sm cursor-pointer"
      onClick={onClick}
    >
      <Icon width={17} />
      <p>{title}</p>
    </li>
  );
};

export default NotebookHeaderActions;
