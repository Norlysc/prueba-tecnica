import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import TaskPreview from "../components/TaskPreview";
import { TasksContext } from "../contexts/TasksContext";
import { BrowserRouter } from "react-router-dom";

describe("TaskPreview", () => {
  it("Llama a handleComplete cuando se hace clic en el botón de completar tarea", () => {
    const handleCompleteMock = jest.fn();
    const id = "1";
    const title = "Tarea de prueba";
    const currentState = "pendiente";

    render(
      <BrowserRouter>
        <TasksContext.Provider value={{ handleComplete: handleCompleteMock }}>
          <TaskPreview id={id} title={title} currentState={currentState} />
        </TasksContext.Provider>
      </BrowserRouter>
    );

    const completeButton = screen.getByTestId("completar-tarea");
    fireEvent.click(completeButton);

    expect(handleCompleteMock).toHaveBeenCalledWith({ id });
  });
});
