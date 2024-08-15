import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems1 from "./components/TodoItems1";
import TodoItems2 from "./components/TodoItems2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <div className="itmes-container">
      <TodoItems1/>
      <TodoItems2/>
       </div>
   </center>
  );
}

export default App;
