import { Box, Typography } from "@mui/material";
import serverErrorImage from "../../public/server-error.svg";

export default function ServerError({ message }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          mb: "2rem",
          textAlign: "center",
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "3rem",
          },
        }}
      >
        {message}
      </Typography>
      <img src={serverErrorImage} />
    </Box>
  );
}
