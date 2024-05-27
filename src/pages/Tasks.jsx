import { Container, Typography } from "@mui/material";
import List from "../components/List";
import { ROUTES } from "../constants/routes";
import LinkButton from "../components/LinkButton";

export default function Tasks() {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          my: "48px",
          fontSize: {
            xs: "2rem",
            sm: "3rem",
            md: "3.5rem",
          },
        }}
      >
        To Do App
      </Typography>
      <LinkButton path={ROUTES.new_task} text={"Nueva tarea"} />
      <List />
    </Container>
  );
}
