import "./App.css";
import RenderTodos from "./components/RenderTodos";
import TodosForm from "./components/TodosForm";

function App() {
  return (
    <div className="mx-auto max-w-md mt-10">
      <TodosForm />
      <RenderTodos />
    </div>
  );
}

export default App;
