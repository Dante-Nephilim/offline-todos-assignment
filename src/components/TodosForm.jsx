import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useTodoContext } from "../context/todo.context";
import Button from "@mui/material/Button";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export default function TodosForm() {
  const { todos, setTodos, compareStatus } = useTodoContext();
  const [name, setName] = useState("");

  useEffect(() => {
    compareStatus();
  }, [name]);

  return (
    <div>
      <form
        className="flex items-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();

          setTodos((prev) => {
            let currentDate = new Date();

            return prev.concat([
              {
                id: `${currentDate}+${name}`,
                name: name,
                status: "active",
                createdAt: currentDate,
                updatedAt: currentDate,
              },
            ]);
          });

          setName("");
        }}
      >
        <TextField
          id="todo"
          label="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button variant="contained" startIcon={<SaveOutlinedIcon />}>
          Save
        </Button>
      </form>
    </div>
  );
}
