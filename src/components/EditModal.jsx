import { Box, Modal } from "@mui/material";
import EditForm from "./EditForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 400,
    md: 600,
  },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
};

export default function EditModal({ open, handleClose, task }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <EditForm {...task} handleClose={handleClose} />
      </Box>
    </Modal>
  );
}
