"use client";

import React, { useState } from "react";
import { Task } from "../pages/api/types";

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
  };

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {isEditing ? (
        <input
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={editedTaskTitle}
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div>
        {isEditing ? (
          <button className="text-green-500 mr-3" onClick={handleSave}>
            save
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            edit
          </button>
        )}

        <button className="text-red-500">delete</button>
      </div>
    </li>
  );
};

export default Todo;
