import { FC } from "react";

export interface PageCardProps {
  title: string;
  contentPeek: string[];
  pageId: string;
  onClick?: () => void;
}

const PageCard: FC<PageCardProps> = ({
  title,
  contentPeek,
  onClick = () => {},
}) => {
  return (
    <div
      className="flex flex-shrink-0 flex-col xl:gap-5 xl:w-64 xl:h-64 xl:shadow-lg xl:p-3 xl:rounded-md border cursor-pointer"
      onClick={onClick}
    >
      <p className="xl:text-2xl">{title}</p>
      <div className="flex flex-col xl:gap-4">
        {contentPeek.map((content) => (
          <p key={content} className="xl:text-sm">
            {content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PageCard;
