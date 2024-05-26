/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Task from "./Task";
import { getTasks } from "../services/tasks.service";
import { Box, Pagination } from "@mui/material";

export default function List() {
  const [tasksResponse, setTasks] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getTasks({ page })
      .then((tasksResponse) => setTasks(tasksResponse))
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <Box
      component="section"
      sx={{
        width: "600px",
        margin: "auto",
      }}
    >
      {isLoading
        ? "cargando..."
        : tasksResponse.data.map((task) => <Task {...task} key={task.id} />)}
      <Pagination
        count={tasksResponse?.pages}
        shape="rounded"
        onChange={(_, page) => setPage(page)}
      />
    </Box>
  );
}
