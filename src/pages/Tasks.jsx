import { Container, Typography } from "@mui/material";
import List from "../components/List";

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
      <List />
    </Container>
  );
}
