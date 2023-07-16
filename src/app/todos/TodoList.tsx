"use client";
import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./page";

export function TodoList({
  todos,
  onDelete,
  onChange,
}: {
  todos: TodoType[];
  onDelete: (id: string) => void;
  onChange: (editingTodo: TodoType) => void;
}) {
  return (
    <>
      <ul>
        {todos?.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onChange={onChange}
          ></Todo>
        ))}
      </ul>
    </>
  );
}
