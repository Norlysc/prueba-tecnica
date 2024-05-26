import { Box, Button, Chip, Typography } from "@mui/material";
import { useContext, useState } from "react";
import EditModal from "./EditModal";
import { TasksContext } from "../contexts/TasksContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { stateColors } from "./TaskPreview";

export default function Task({
  id,
  title,
  description,
  endDate,
  currentState,
  notes,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { handleDelete } = useContext(TasksContext);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Box component="article" maxWidth={"700px"}>
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "3.5rem",
          },
          mb: "12px",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              sx: "1rem",
              md: "1.25rem",
            },
          }}
        >
          {new Date(endDate).toLocaleDateString("es-ES")}
        </Typography>
        <Chip
          color={stateColors[currentState]}
          label={currentState}
          sx={{ textTransform: "capitalize" }}
        />
      </Box>
      <Typography
        variant="body1"
        sx={{
          my: "1.5rem",
          fontSize: {
            xs: "1rem",
            sm: "1.5rem",
            md: "2rem",
          },
        }}
      >
        {description}
      </Typography>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <Button onClick={handleOpen} variant="outlined">
          Editar
        </Button>
        <Button
          onClick={() => {
            handleDelete({ id });
            navigate(ROUTES.home);
          }}
          color="error"
          variant="outlined"
        >
          Eliminar
        </Button>
      </Box>
      <EditModal
        open={open}
        handleClose={handleClose}
        task={{ id, title, description, endDate, currentState, notes }}
      />
    </Box>
  );
}
