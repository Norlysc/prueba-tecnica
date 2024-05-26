import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function TaskStatusForm({ currentState }) {
  return (
    <FormControl>
      <InputLabel id="estado">Estado</InputLabel>
      <Select
        name="currentState"
        id="estado"
        required
        defaultValue={currentState}
      >
        <MenuItem value={"pendiente"}>Pendiente</MenuItem>
        <MenuItem value={"en progreso"}>En progreso</MenuItem>
        <MenuItem value={"terminada"}>Terminada</MenuItem>
      </Select>
    </FormControl>
  );
}
