export async function createTask(task) {
  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return response.ok;
}

export async function getTasks({ page = 1, limit = 5 }) {
  const response = await fetch(
    `http://localhost:3000/tasks?_page=${page.toString()}&_per_page=${limit.toString()}`
  );

  const body = await response.json();
  console.log({ response, body });
  return body;
}

export async function updateTask(identifier, task) {
  const { id, ...rest } = task;

  const response = await fetch(`http://localhost:3000/tasks/${identifier}`, {
    method: "PATCH",
    body: JSON.stringify({ ...rest }),
  });

  return response.ok;
}

export async function deleteTask(identifier) {
  const response = await fetch(`http://localhost:3000/tasks/${identifier}`, {
    method: "DELETE",
  });

  return response.ok;
}
