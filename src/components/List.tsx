import { useEffect, useState } from "react";
import Task from "../components/Task";
import { getTasks } from "../services/tasks.service";

export interface Task {
  id: string;
  title: string;
  description: string;
  endDate: Date;
  currentState: boolean;
  notes: Array<string>;
}

export default function List() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, []);
  return (
    <section>
      {tasks.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </section>
  );
}
