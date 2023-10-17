import React, { FC, useState, SVGProps } from "react";
import SidebarToggle from "./SidebarToggle";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
  BookmarkIcon,
  Cog8ToothIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import useModal from "src/hooks/useModal";
import NewNotebookModal from "../modals/NewNotebookModal";

export const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isNewNotebookModalShowing, toggle] = useModal();

  return isSidebarActive ? (
    <div
      className="fixed top-0 left-0 w-full h-screen"
      onClick={() => {
        setIsSidebarActive(false);
      }}
    >
      <NewNotebookModal isShowing={isNewNotebookModalShowing} toggle={toggle} />
      <aside
        className="fixed flex justify-center p-4 top-0 left-0 h-full w-80 bg-white border rounded-r-xl shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="w-4/5 flex flex-col gap-5 mt-10 ">
          <Logo />
          <div>
            <SidebarDivider margin="my-4" />
            <ul className="flex flex-col gap-2">
              <SidebarLink
                href="/home"
                icon={Cog8ToothIcon}
                title="Preferences"
              />
              <SidebarEntry icon={MagnifyingGlassIcon} title="Quick Search" />
              <SidebarEntry
                icon={PlusIcon}
                title="New Notebook"
                onClick={() => toggle()}
              />
            </ul>
            <SidebarDivider margin="mt-5" />
          </div>
          <div className="">
            <SidebarSectionalHeader title="Notebooks" />
            <ul className="flex flex-col gap-2 mt-2">
              <SidebarLink
                href="/notebook/page"
                icon={BookmarkIcon}
                title="React Notes"
              />
              <SidebarEntry icon={BookmarkIcon} title="React Notes" />
              <SidebarEntry icon={BookmarkIcon} title="React Notes" />
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  ) : (
    <SidebarToggle onClickHandler={() => setIsSidebarActive((prev) => !prev)} />
  );
};

const SidebarLink: FC<{
  icon: React.FC<Omit<SVGProps<SVGSVGElement>, "ref">>;
  title: string;
  href: string;
}> = ({ icon: Icon, title, href }) => {
  return (
    <li>
      <Link to={href} className="flex items-center gap-1 text-sm">
        <Icon width={17} />
        <p>{title}</p>
      </Link>
    </li>
  );
};

const SidebarEntry: FC<{
  icon: React.FC<Omit<SVGProps<SVGSVGElement>, "ref">>;
  title: string;
  onClick?: () => void;
}> = ({ icon: Icon, title, onClick = () => alert("Function not mapped") }) => {
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

const SidebarDivider = ({ margin = "" }) => {
  return <div className={"h-px bg-gray-300 w-full " + margin}></div>;
};

const SidebarSectionalHeader: FC<{ title: string }> = ({ title }) => {
  return <p className="font-bold">{title}</p>;
};
