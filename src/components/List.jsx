import { useContext } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { TasksContext } from "../contexts/TasksContext";
import TaskPreview from "./TaskPreview";
import Spinner from "./Spinner";

export default function List() {
  const { tasksResponse, setPage, isLoading } = useContext(TasksContext);

  return (
    <Box
      component="section"
      sx={{
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Grid container>
        {isLoading ? (
          <Spinner />
        ) : (
          tasksResponse.data.map((task) => (
            <Grid key={task.id} xs={12} sx={{ mb: "16px" }}>
              <TaskPreview {...task} />
            </Grid>
          ))
        )}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "24px",
        }}
      >
        <Pagination
          count={tasksResponse?.pages}
          shape="rounded"
          onChange={(_, page) => setPage(page)}
        />
      </Box>
    </Box>
  );
}
