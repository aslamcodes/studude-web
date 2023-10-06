"use client";
import React, { FC, useState } from "react";
import DynamicInput, { DynamicInputProps } from "./DynamicInput";

interface NoteEditorProps {
  initialNotes: DynamicInputProps[];
}

const NoteEditor: FC<NoteEditorProps> = ({ initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes);

  const onNewNote = () => {
    const newNote: DynamicInputProps = {
      type: "h1",
      content: "Type Something",
      id: "1",
    };
    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <>
      {notes.map((content) => (
        <DynamicInput key={content.id} {...content} />
      ))}
      <button onClick={() => onNewNote()}>+ Add</button>
    </>
  );
};

export default NoteEditor;
