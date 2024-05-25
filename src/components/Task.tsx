interface Props {
    title: string,
    description: string,
    endDate: Date, 
    currentState: boolean, 
    notes: Array<string> 

}

export default function Task({title, description, endDate, currentState, notes}:Props) {

  return (

    <article>
        <h3>{title} </h3>
        <p>{description} </p>
        <div><span>{endDate.toLocaleDateString("es-ES") }</span> <span>{currentState ? "Concluida" : "Pendiente"}</span></div> 
        <ul>
            {notes.map((note, index) => <li key={index} >{note}</li>)} 
        </ul>
        <button>editar</button>
        <button>eliminar</button>
    </article>
  )
}