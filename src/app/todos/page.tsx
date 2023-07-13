"use client";
import { ChangeEvent, useState } from "react";

type Todo = {
  id: number;
  task: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAdd = () => {
    if (!input) return;
    setTodos([...todos, { id: todos.length, task: input }]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos?.map((todo) => (
          <>
            <li key={todo.id + todo.task}>{todo.task}</li>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </>
        ))}
      </ul>
    </>
  );
}
