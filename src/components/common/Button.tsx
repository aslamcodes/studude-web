import { FC } from "react";

const Button: FC<{
  title: string;
  className?: string;
  onClick?: () => void;
}> = ({ title, className = "", onClick = () => {} }) => {
  return (
    <button
      className={"p-3 rounded-md text-white bg-primary w-fit " + className}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
