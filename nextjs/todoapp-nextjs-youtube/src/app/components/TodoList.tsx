import React from "react";
import { Task } from "../pages/api/types";
import AddTask from "./AddTask";
import Todo from "./Todo";

interface TodolistProps {
  todos: Task[];
}

const TodoList = ({ todos }: TodolistProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
