import { Box, Button, TextField } from "@mui/material";
import { transformDate } from "../utils/transform-date";
import { updateTask } from "../services/tasks.service";
import TaskStatusForm from "./TaskStatusForm";

export default function EditForm({
  id,
  title,
  description,
  currentState,
  endDate,
  notes,
  handleClose,
}) {
  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    const title = formValues.title;
    const description = formValues.description;
    const endDate = new Date(formValues.endDate).getTime();
    const currentState = formValues.currentState;

    const notes = ["nota1", "nota2", "nota3"]
      .map((note) => formValues[note])
      .filter((note) => note !== "");

    updateTask(id, { title, description, endDate, currentState, notes });
    handleClose();
  }

  return (
    <form
      onSubmit={handleForm}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <TextField
        type="text"
        name="title"
        placeholder="Título"
        required
        defaultValue={title}
      />
      <TextField
        name="description"
        placeholder="Descripción"
        multiline
        required
        defaultValue={description}
      />
      <TextField
        type="date"
        name="endDate"
        required
        defaultValue={transformDate(endDate)}
      />
      <TaskStatusForm currentState={currentState} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <label>Notas</label>
        <TextField
          type="text"
          name="nota1"
          placeholder="Nota"
          required
          defaultValue={notes[0]}
        />
        <TextField
          type="text"
          name="nota2"
          placeholder="Nota"
          defaultValue={notes[1]}
        />
        <TextField
          type="text"
          name="nota3"
          placeholder="Nota"
          defaultValue={notes[2]}
        />
      </Box>
      <Button type="submit">Actualizar tarea</Button>
      <Button type="button">Cancelar</Button>
    </form>
  );
}
