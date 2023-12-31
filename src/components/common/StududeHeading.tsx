import React, { FC } from "react";

const StududeHeading: FC<{ title: string; onClick?: () => void }> = ({
  title,
  onClick,
}) => {
  return (
    <div
      className={`max-w-min space-y-px ${onClick && "cursor-pointer"}`}
      onClick={onClick ? onClick : () => {}}
    >
      <p className="text-3xl font-bold whitespace-nowrap">{title}</p>
      <div className="h-1 w-full bg-accent"></div>
    </div>
  );
};

export default StududeHeading;
