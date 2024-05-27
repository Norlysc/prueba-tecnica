import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function LinkButton({ path, text }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: "3rem" }}>
      <Link to={path} style={{ textDecoration: "none" }}>
        <Button variant="contained">{text}</Button>
      </Link>
    </Box>
  );
}
