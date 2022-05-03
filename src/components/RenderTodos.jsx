import { useEffect, useMemo } from "react";
import { useTodoContext } from "../context/todo.context";
import Button from "@mui/material/Button";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import { format, parseISO } from "date-fns";

export default function RenderTodos() {
  const { todos, setTodos, changeStatus, compareStatus } = useTodoContext();

  const unfinishedTodos = useMemo(
    () => todos.filter((todo) => todo.status === "active"),
    [todos]
  );

  const finishedTodos = useMemo(
    () => todos.filter((todo) => todo.status === "finished"),
    [todos]
  );

  return (
    <div className="mt-10">
      <Button
        variant="outlined"
        startIcon={<ReplayOutlinedIcon />}
        onClick={() => {
          localStorage.clear();
          setTodos([]);
        }}
      >
        Clear all
      </Button>

      <ul className="my-5">
        {unfinishedTodos.length > 0
          ? unfinishedTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex gap-3 items-center justify-between pb-2"
              >
                <div>
                  <h1>{todo.name}</h1>
                  <p className="text-sm text-gray-700">
                    {format(new Date(todo.updatedAt), "dd-MMM-yyyy hh:ss aa")}
                  </p>
                </div>
                <Button
                  variant="text"
                  onClick={() => {
                    changeStatus(todo.id);
                  }}
                  startIcon={
                    todo.status === "active" ? (
                      <CheckCircleOutlineIcon />
                    ) : (
                      <UndoOutlinedIcon />
                    )
                  }
                >
                  {todo.status === "active" ? "Mark as done" : "Mark as todo"}
                </Button>
              </li>
            ))
          : "All done"}
      </ul>
      <hr />
      <ul className="my-5">
        {finishedTodos.length > 0
          ? finishedTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex gap-3 items-center justify-between pb-2"
              >
                <div>
                  <h1>{todo.name}</h1>
                  <p className="text-sm text-gray-700">
                    {format(new Date(todo.updatedAt), "dd-MMM-yyyy hh:ss aa")}
                  </p>{" "}
                </div>
                <Button
                  variant="text"
                  onClick={() => {
                    changeStatus(todo.id);
                  }}
                  startIcon={
                    todo.status === "active" ? (
                      <CheckCircleOutlineIcon />
                    ) : (
                      <UndoOutlinedIcon />
                    )
                  }
                >
                  {todo.status === "active" ? "Mark as done" : "Mark as todo"}
                </Button>
              </li>
            ))
          : "Start completing the todos"}
      </ul>
    </div>
  );
}
