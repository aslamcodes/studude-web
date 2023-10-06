import React, { FC } from "react";

const StududeHeading: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="max-w-min space-y-px">
      <p className="text-3xl font-bold whitespace-nowrap">{title}</p>
      <div className="h-1 w-full bg-accent"></div>
    </div>
  );
};

export default StududeHeading;
