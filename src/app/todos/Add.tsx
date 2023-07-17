"use client";
import React, { useState } from "react";

export const Add = ({ onAddTodo }: { onAddTodo: (input: string) => void }) => {
  const [input, setInput] = useState<string>("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={() => {
          onAddTodo(input);
          setInput("");
        }}
      >
        Add
      </button>
    </>
  );
};
