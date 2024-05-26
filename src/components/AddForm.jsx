import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { TasksContext } from "../contexts/TasksContext";
import { useContext } from "react";

export default function AddForm() {
  const { handleCreate } = useContext(TasksContext);
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

    handleCreate({ title, description, endDate, currentState, notes });
    event.currentTarget.reset();
  }

  return (
    <Box
      component="form"
      onSubmit={handleForm}
      sx={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: {
          xs: "350px",
          md: "500px",
        },
      }}
    >
      <TextField type="text" name="title" placeholder="Título" required />
      <TextField
        name="description"
        placeholder="Descripción"
        multiline
        required
      />
      <TextField type="date" name="endDate" required />
      <FormControl>
        <InputLabel id="estado">Estado</InputLabel>
        <Select name="currentState" id="estado" required>
          <MenuItem value={"pendiente"}>Pendiente</MenuItem>
          <MenuItem value={"en progreso"}>En progreso</MenuItem>
          <MenuItem value={"terminada"}>Terminada</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <label>Notas</label>
        <TextField type="text" name="nota1" placeholder="Nota" required />
        <TextField type="text" name="nota2" placeholder="Nota" />
        <TextField type="text" name="nota3" placeholder="Nota" />
      </Box>
      <Button type="submit">Crear tarea</Button>
    </Box>
  );
}
