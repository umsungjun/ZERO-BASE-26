import "./App.css";
import Divider from "./Divider/Divider";
import TodoHeader from "./Header/TodoHeader";
import TodoInput from "./Input/TodoInput";
import TodoList from "./List/TodoList";
import TodoListArea from "./List/TodoListArea";

import TodoProvider from "./Todo/TodoProvider";

import TodoListTools from "./Tools/TodoListTools";

function App() {
  // const [text, setText] = useState("");

  return (
    <main className="App">
      <TodoProvider>
        <TodoHeader />
        <TodoInput />
        <TodoListArea>
          <TodoListTools />
          <Divider />
          <TodoList />
        </TodoListArea>
      </TodoProvider>
    </main>
  );
}

export default App;
