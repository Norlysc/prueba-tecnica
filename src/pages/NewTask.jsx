import { Container } from "@mui/material";
import AddForm from "../components/AddForm";

export default function NewTask() {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <h1>Crear una nueva tarea</h1>
      <AddForm />
    </Container>
  );
}
