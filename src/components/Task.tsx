import { deleteTask, updateTask } from "../services/tasks.service";

interface Props {
  id: string;
  title: string;
  description: string;
  endDate: Date;
  currentState: boolean;
  notes: Array<string>;
}

export default function Task({
  id,
  title,
  description,
  endDate,
  currentState,
  notes,
}: Props) {
  function handleComplete() {
    updateTask(id, { currentState: true });
  }

  function handleDelete() {
    deleteTask(id);
  }

  return (
    <article>
      <h3>{title} </h3>
      <p>{description} </p>
      <div>
        <span>{new Date(endDate).toLocaleDateString("es-ES")}</span>{" "}
        <span>{currentState ? "Concluida" : "Pendiente"}</span>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <button>editar</button>
      <button onClick={handleDelete}>eliminar</button>
      {currentState ? null : (
        <button onClick={handleComplete}>completar</button>
      )}
    </article>
  );
}
