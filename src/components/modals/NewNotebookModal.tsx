import React, { FC, useState } from "react";
import Modal from "../common/Modal";
import { ModalProps } from "./model.types";
import Button from "../common/Button";
import { useCreateNotebookMutation } from "src/slices/notebookApiSlice";
import { useNavigate } from "react-router-dom";

const NewNotebookModal: FC<ModalProps> = ({ toggle, isShowing }) => {
  const [trigger, { data: response }] = useCreateNotebookMutation();
  const [noteBookTitle, setNoteBookTitle] = useState("");
  const navigate = useNavigate();

  if (response?.data) {
    navigate(`/notebook/${response.data._id}`);
  }
  return (
    <Modal hide={toggle} isShowing={isShowing}>
      <div className="p-6 w-2/6 bg-white rounded-lg flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">New Notebook</h1>
          <input
            className="p-3 bg-gray-200 rounded-md"
            placeholder="Choose a notebook title"
            value={noteBookTitle}
            onChange={(e) => {
              setNoteBookTitle(e.target.value);
            }}
          ></input>
        </div>
        <Button
          title="Create!"
          className="self-end"
          onClick={() => {
            trigger({ title: noteBookTitle });
          }}
        />
      </div>
    </Modal>
  );
};

export default NewNotebookModal;
