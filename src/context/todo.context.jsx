import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export default function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("items", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setTodos(items);
    }
  }, []);
  function changeStatus(id) {
    console.log({ id });
    let bufferArray = [...todos];
    bufferArray.forEach((element) => {
      if (element.id === id) {
        if (element.status === "active") {
          element.status = "finished";
        } else {
          element.status = "active";
        }
        element.updatedAt = new Date();
      }
    });
    setTodos(bufferArray);
    compareStatus();
  }

  function compareStatus() {
    let objAry = [...todos];
    objAry = objAry.sort((a, b) => b.updatedAt - a.updatedAt);
    setTodos(objAry);
  }

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, changeStatus, compareStatus }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export function useTodoContext() {
  return useContext(TodoContext);
}
