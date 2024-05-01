import { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:3001/tsks", { cache: "no-store" });
  const todos = res.json();

  return todos;
};
