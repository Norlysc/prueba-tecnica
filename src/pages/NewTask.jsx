import { Box, Container, Typography } from "@mui/material";
import AddForm from "../components/AddForm";
import { ROUTES } from "../constants/routes";
import LinkButton from "../components/LinkButton";

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
      <LinkButton path={ROUTES.home} text={"Regresar"} />
      <Box component="section" sx={{ py: "3rem" }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "3.5rem",
            },
            my: "1rem",
          }}
        >
          Crear una nueva tarea
        </Typography>
        <AddForm />
      </Box>
    </Container>
  );
}
