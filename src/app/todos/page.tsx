"use client";
import { useState } from "react";
import { Add } from "./Add";
import { TodoList } from "./TodoList";
import { useHandle } from "./hook";

/**
 * todosの状態をAppで管理
 * ✅Addボタン押下でtodolistを追加できる
 * ・Addコンポでinput状態を管理
 * ・addボタン押下時、inputをhandleAddに引数として渡す
 * →Appでinputを受け取り、todosを更新
 *
 * ✅editボタンでliがinputになり、編集できるようになる。editボタンがsaveボタンに変わる
 * ✅saveボタンでliに代わる
 * ・edit中かの状態をTodoコンポで管理。edit状態に応じてUI変更
 * ・編集するたびにtodosを更新する編集中のidとtaskを引数に渡す(todoごとで良い)
 *
 * ✅deleteボタンでliが消える
 * ・Todoコンポから削除されたidをhandleDeleteの引数に渡す
 */
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
