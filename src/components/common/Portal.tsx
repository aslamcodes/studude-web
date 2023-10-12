import React, { FC, useState } from "react";

const Portal: FC<{ Content: FC<{ onClick?: () => void }> }> = ({ Content }) => {
  const [showPortal, setShowPortal] = useState(false);

  return (
    <div className="h-full w-full">
      {showPortal && (
        <Content
          onClick={() => {
            setShowPortal(false);
          }}
        />
      )}
    </div>
  );
};

export default Portal;
