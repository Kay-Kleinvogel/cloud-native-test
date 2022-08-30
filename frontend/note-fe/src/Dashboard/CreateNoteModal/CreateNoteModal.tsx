import { Dialog } from "@mui/material";
import React from "react";

export interface ICreateNoteModalProps {
  open: boolean;
  onClose: (value: string) => void;
}

const CreateNoteModal = (props: ICreateNoteModalProps) => {
  const { open, onClose } = props;
  const handleClose = () => {
    onClose("");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      Create Node Modal
    </Dialog>
  );
};

export default CreateNoteModal;
