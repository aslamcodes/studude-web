import React, { FC } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface SidebarToggleProps {
  onClickHandler: () => void;
}

const SidebarToggle: FC<SidebarToggleProps> = ({ onClickHandler }) => {
  return (
    <Bars3Icon
      onClick={onClickHandler}
      width={24}
      className="fixed top-10 left-10"
    />
  );
};

export default SidebarToggle;
