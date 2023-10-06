import React, { FC } from "react";
import StududeHeading from "../common/StududeHeading";
import RecapCard, { RecapCardProps } from "./RecapCard";

export interface RecapCardContainer {
  recaps: RecapCardProps[];
}

const RecapCardsContainer: FC<RecapCardContainer> = ({ recaps }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <StududeHeading title="Today's Recap" />
      <div className="flex gap-10 gap-y-4 flex-wrap">
        {recaps.map((recap) => (
          <RecapCard
            key={recap.notebookId}
            notebookId={recap.notebookId}
            recapTitle={recap.recapTitle}
            lastRevisited={recap.lastRevisited}
            isRevised={recap.isRevised}
          />
        ))}
      </div>
    </div>
  );
};

export default RecapCardsContainer;
