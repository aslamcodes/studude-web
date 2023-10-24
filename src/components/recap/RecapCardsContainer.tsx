import React, { FC } from "react";
import StududeHeading from "../common/StududeHeading";
import RecapCard from "./RecapCard";
import { useGetRecapForUserQuery } from "src/slices/recapApiSlice";

const RecapCardsContainer: FC = () => {
  const { data: recaps, isLoading, error } = useGetRecapForUserQuery({});

  if (isLoading) return <>Loading</>;
  if (error) return <>{JSON.stringify(error)}</>;

  return (
    <div className="flex flex-col gap-4 ">
      <StududeHeading title="Today's Recap" />
      <div className="flex gap-10 gap-y-4 flex-wrap">
        {recaps?.data.map((recap) => (
          <RecapCard
            key={recap._id}
            notebookId={recap.notebook}
            recapTitle={recap.page.title}
            lastRevisited={new Date(recap.nextRepetition)}
            isRevised={recap.isRevised}
          />
        ))}
      </div>
    </div>
  );
};

export default RecapCardsContainer;
