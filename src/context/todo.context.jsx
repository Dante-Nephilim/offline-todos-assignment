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
    let bufferArray = [...todos];
    bufferArray.forEach((element) => {
      if (element.id === id) {
        if (element.status === "active") {
          element.status = "finished";
        } else {
          element.status = "active";
        }
      }
    });
    setTodos(bufferArray);
    compareStatus();
  }
  function compareTemplate(a, b) {
    const status1 = a.status;
    const status2 = b.status;
    let comparison = 0;
    if (status1 > status2) {
      comparison = 1;
    } else if (status1 < status2) {
      comparison = -1;
    }
    return comparison;
  }
  function compareStatus() {
    let objAry = [...todos];
    objAry = objAry.sort(compareTemplate);
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
