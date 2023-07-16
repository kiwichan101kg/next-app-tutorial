"use client";
import { useState } from "react";
import { Add } from "./Add";
import { TodoList } from "./TodoList";
import { useHandle } from "./hook";

export type TodoType = {
  id: string;
  task: string;
};

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { handleAdd, handleDelete, handleEdit } = useHandle(todos, setTodos);

  return (
    <>
      <Add onAddTodo={handleAdd} />
      <TodoList todos={todos} onChange={handleEdit} onDelete={handleDelete} />
    </>
  );
}
