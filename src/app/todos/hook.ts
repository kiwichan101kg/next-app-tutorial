"use client";
import { v4 as uuidv4 } from "uuid";
import { SetStateAction } from "react";
import { TodoType } from "./page";

export const useHandle = (
  todos: TodoType[],
  setTodos: (value: SetStateAction<TodoType[]>) => void
) => {
  console.log("render");

  /**
   * 追加するタスク名を受け取り、todosを更新する関数
   * @param addTask addテキストボックスに入力された追加タスク
   */
  const handleAdd = (addTask: string) => {
    setTodos([...todos, { id: uuidv4(), task: addTask }]);
  };

  /**
   * todosを一つづつ見ていき、deleteタスクのidと一致したら除外し、todosを更新する関数
   * @param id deleteされたタスクのid
   */
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * todosを一つずつ見ていき、編集中のidと一致したらtodosを更新する関数
   * @param editingTodo タスク編集中のtodoオブジェクト
   */
  const handleEdit = (editingTodo: TodoType) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === editingTodo.id) {
        return { ...todo, task: editingTodo.task };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  return { handleAdd, handleDelete, handleEdit };
};
