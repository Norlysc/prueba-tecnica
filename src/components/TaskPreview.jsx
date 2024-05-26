import { Box, Chip, IconButton, Typography } from "@mui/material";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import { updateTask } from "../services/tasks.service";

const stateColors = {
  terminada: "success",
  pendiente: "warning",
  "en progreso": "info",
};

export default function TaskPreview({ id, title, currentState }) {
  function handleComplete() {
    updateTask(id, { currentState: "terminada" });
  }
  return (
    <Box component="article">
      <Typography variant="h3">{title}</Typography>
      <Chip label={currentState} color={stateColors[currentState]} />
      {currentState === "terminada" ? null : (
        <IconButton onClick={handleComplete}>
          <CheckBoxOutlineBlankSharpIcon />
        </IconButton>
      )}
    </Box>
  );
}
