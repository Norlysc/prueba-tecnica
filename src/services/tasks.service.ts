/* eslint-disable @typescript-eslint/no-unused-vars */
import { Task } from "../components/List";

export async function getTasks() {
  const response = await fetch("http://localhost:3000/tasks");
  const tasks = await response.json();
  return tasks;
}

export async function updateTask(identifier: string, task: Partial<Task>) {
  const { id, ...rest } = task;

  const response = await fetch(`http://localhost:3000/tasks/${identifier}`, {
    method: "PATCH",
    body: JSON.stringify({ ...rest }),
  });

  return response.ok;
}

export async function deleteTask(identifier: string) {
  const response = await fetch(`http://localhost:3000/tasks/${identifier}`, {
    method: "DELETE",
  });

  return response.ok;
}
