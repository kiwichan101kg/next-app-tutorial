import { useState } from "react";
import { TodoType } from "./page";

export const Todo = ({
  todo,
  onDelete,
  onChange,
}: {
  todo: TodoType;
  onDelete: (id: string) => void;
  onChange: (editingTodo: TodoType) => void;
}) => {
  const [isEditing, setEditing] = useState<boolean>(false);

  let content;
  if (isEditing) {
    content = (
      <>
        <input
          type="text"
          value={todo.task}
          onChange={(e) => onChange({ ...todo, task: e.target.value })}
        />
        <button
          onClick={() => {
            setEditing(false);
          }}
        >
          save
        </button>
      </>
    );
  } else {
    content = (
      <>
        <li key={todo.id}>{todo.task}</li>
        <button
          onClick={() => {
            setEditing(true);
          }}
        >
          edit
        </button>
      </>
    );
  }

  return (
    <>
      {content}
      <button onClick={() => onDelete(todo.id)}>delete</button>
    </>
  );
};
