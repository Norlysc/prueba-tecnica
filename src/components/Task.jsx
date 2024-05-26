import { Button, IconButton } from "@mui/material";
import { deleteTask, updateTask } from "../services/tasks.service";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import EditModal from "./EditModal";

export default function Task({
  id,
  title,
  description,
  endDate,
  currentState,
  notes,
}) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleComplete() {
    updateTask(id, { currentState: "terminada" });
  }

  function handleDelete() {
    deleteTask(id);
  }

  return (
    <article>
      <h3>{title} </h3>
      <p>{description} </p>
      <div>
        <span>{new Date(endDate).toLocaleDateString("es-ES")}</span>{" "}
        <span>{currentState}</span>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <Button onClick={handleOpen}>editar</Button>
      <IconButton onClick={handleDelete}>
        <DeleteIcon sx={{ color: "red" }} />
      </IconButton>
      {currentState === "terminada" ? null : (
        <button onClick={handleComplete}>completar</button>
      )}
      <EditModal
        open={open}
        handleClose={handleClose}
        task={{ id, title, description, endDate, currentState, notes }}
      />
    </article>
  );
}
