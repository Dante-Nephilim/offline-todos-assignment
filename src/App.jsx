import "./App.css";
import RenderTodos from "./components/RenderTodos";
import TodosForm from "./components/TodosForm";

function App() {
  return (
    <div>
      <TodosForm />
      <RenderTodos />
    </div>
  );
}

export default App;
