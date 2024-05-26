import { useContext, useEffect } from "react";
import Task from "../components/Task";
import { Container } from "@mui/material";
import { TasksContext } from "../contexts/TasksContext";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Details() {
  const { id } = useParams();
  const { task, isLoading, fetchOneTask, refetch } = useContext(TasksContext);

  useEffect(() => {
    fetchOneTask({ id });
  }, [refetch]);

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
      {isLoading || !task ? <Spinner /> : <Task {...task} />}
    </Container>
  );
}
