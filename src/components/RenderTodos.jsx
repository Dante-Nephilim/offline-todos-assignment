import { useEffect } from "react";
import { useTodoContext } from "../context/todo.context";

export default function RenderTodos() {
  const { todos, setTodos, changeStatus, compareStatus } = useTodoContext();

  //   console.log(x);
  return (
    <div>
      <button
        onClick={() => {
          localStorage.clear();
          setTodos([]);
        }}
      >
        clear all
      </button>
      <ul>
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <li key={todo.id}>
              <h1>{todo.name}</h1>
              <h1>{todo.status}</h1>
              <button
                onClick={() => {
                  changeStatus(todo.id);
                }}
              >
                Change Status
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
