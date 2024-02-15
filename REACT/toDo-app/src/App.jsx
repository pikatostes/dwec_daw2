import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="toDo-app">
      <div className="img-container-logo">
        <h1 className="logo">Alejandro Ríos | Full-Stack Developer</h1>
      </div>
      <div className="toDo-main">
        <h2>My Tasks</h2>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
