"use client";
import React, { FC, useState } from "react";

export interface DynamicInputProps {
  type: "h1" | "h2";
  content: string;
  id: string;
}

const DynamicInput: FC<DynamicInputProps> = ({
  type,
  content: contentFromProp,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState(contentFromProp);

  return (
    <div className="w-full" onClick={() => setIsActive(() => true)}>
      {isActive ? (
        <textarea
          className="w-full"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
            }
          }}
          onBlur={() => setIsActive(false)}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
      ) : (
        <p className="w-full">{content}</p>
      )}
    </div>
  );
};

export default DynamicInput;
