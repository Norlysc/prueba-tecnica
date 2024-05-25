import Task from "../components/Task";

const listaTareas = [
  {
    id: 1,
    title: "aprender react",
    description: "revisar documentacion",
    endDate: new Date(),
    currentState: false,
    notes: ["punto1", "punto2"],
  },
  {
    id: 2,
    title: "aprender Java",
    description: "reunion",
    endDate: new Date(),
    currentState: false,
    notes: ["punto4", "punto5"],
  },
];
export default function Tasks() {
  return (
    <section>
      {listaTareas.map((tarea) => (
        <Task {...tarea} key={tarea.id} />
      ))}
    </section>
  );
}
