import { useState } from "react";
import { Button } from "./Button";

export const TodoList = () => {
  const initialState = [
    {
      task: "Learn vue.js",
      isCompleted: false
    },
    {
      task: "Learn React Hook",
      isCompleted: false
    },
    {
      task: "Learn Gatsby.js",
      isCompleted: false
    }
  ];
  const [todos, setTodo] = useState(initialState);
  const [task, setTask] = useState("");

  const handleNewTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") return;
    setTodo((todos) => [...todos, { task: task, isCompleted: false }]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  const handleUpdate = (index) => {
    let newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodo(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        Add Task :{" "}
        <input
          placeholder="Add New Task"
          value={task}
          onChange={handleNewTask}
        />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={
              todo.isCompleted === true
                ? { textDecorationLine: "line-through" }
                : {}
            }
          >
            {todo.task}
            <Button handleFunc={() => handleRemoveTask(index)} bname="削除"/>
            <Button handleFunc={() => handleUpdate(index)} bname="完了"/>
          </li>
        ))}
      </ul>
    </div>
  );
};
