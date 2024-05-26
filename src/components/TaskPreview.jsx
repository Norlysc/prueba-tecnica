import React from "react";
import { Box, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { TasksContext } from "../contexts/TasksContext";

export const stateColors = {
  terminada: "success",
  pendiente: "warning",
  "en progreso": "info",
};

export default function TaskPreview({ id, title, currentState }) {
  const [isComplete, setIsComplete] = useState(currentState === "terminada");
  const { handleComplete } = useContext(TasksContext);

  function completeTask(e) {
    e.stopPropagation();
    handleComplete({ id });
    setIsComplete(true);
  }

  return (
    <Box
      role="listitem"
      component="article"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
        border: "1px solid black",
        borderRadius: "24px",
        padding: "12px 16px",
      }}
    >
      <Link
        to={`${ROUTES.details}/${id}`}
        style={{
          textDecoration: "none",
          display: "flex",
          gap: "16px",
          flex: "1 1 auto",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            flex: "1 1 auto",
            textTransform: "capitalize",
            fontSize: {
              xs: "1rem", // Tamaño de fuente para pantallas pequeñas
              sm: "1.25rem", // Tamaño de fuente para pantallas medianas
              md: "1.5rem", // Tamaño de fuente para pantallas grandes
            },
            color: "black",
          }}
        >
          {title}
        </Typography>
        <Chip
          label={currentState}
          color={stateColors[currentState]}
          sx={{ width: "130px", textTransform: "capitalize" }}
        />
      </Link>
      {currentState === "terminada" ? null : (
        <Tooltip title="Completar tarea">
          <IconButton onClick={completeTask} data-testid="completar-tarea">
            {isComplete ? (
              <CheckBoxSharpIcon />
            ) : (
              <CheckBoxOutlineBlankSharpIcon />
            )}
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}
