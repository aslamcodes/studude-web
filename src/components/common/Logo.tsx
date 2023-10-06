import { BookOpenIcon } from "@heroicons/react/24/outline";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-1">
      <BookOpenIcon width={36} />
      <p className="text-3xl font-bold">
        Stu<span className="text-primary">dude</span>
      </p>
    </div>
  );
};

export default Logo;
