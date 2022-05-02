import { useEffect, useState } from "react";
import { useTodoContext } from "../context/todo.context";

export default function TodosForm() {
  const { todos, setTodos, compareStatus } = useTodoContext();
  const [name, setName] = useState("");
  let currentdate = new Date();

  useEffect(() => {
    compareStatus();
  }, [name]);

  return (
    <div>
      <form>
        <label>
          New TODO:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();

              setTodos((prev) => {
                return prev.concat([
                  {
                    id: `${currentdate}+${name}`,
                    name: name,
                    status: "active",
                  },
                ]);
              });

              setName("");
            }}
          >
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}
