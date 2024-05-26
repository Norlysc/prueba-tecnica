import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../services/tasks.service";

export const TasksContext = createContext();

export default function TasksContextProvider({ children }) {
  const [tasksResponse, setTasks] = useState();
  const [task, setTask] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [refetch, setRefetch] = useState(false);

  function refetchTasks() {
    setRefetch(!refetch);
  }

  async function handleDelete({ id }) {
    await deleteTask(id);
    toast.info("Se eliminó la tarea");
    refetchTasks();
  }

  async function handleCreate(task) {
    createTask(task);
    toast.success(`Se creó la tarea ${task.title}`);
    refetchTasks();
  }

  async function handleUpdate({ id, task }) {
    await updateTask(id, task);
    toast.info(`Se actualizó la tarea`);
    refetchTasks();
  }

  async function handleComplete({ id }) {
    await updateTask(id, { currentState: "terminada" });
    toast.success(`Se completó la tarea`);
    refetchTasks();
  }

  async function fetchTasks() {
    setIsLoading(true);
    const tasks = await getTasks({ page });
    setTasks(tasks);
    setIsLoading(false);
  }

  async function fetchOneTask({ id }) {
    setIsLoading(true);
    const task = await getTaskById({ id });
    setTask(task);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTasks();
  }, [page, refetch]);

  return (
    <TasksContext.Provider
      value={{
        tasksResponse,
        task,
        isLoading,
        refetch,
        setPage,
        refetchTasks,
        handleComplete,
        handleDelete,
        handleUpdate,
        handleCreate,
        fetchOneTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
