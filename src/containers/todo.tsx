"use client";

import TaskWrapper from "@/components/task-wrapper";
import TodoCard from "@/components/todo-card";

import { useEffect, useState } from "react";

interface ITodoData {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

const Todo = () => {
  const [todo, setTodo] = useState<ITodoData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setTodo(data))
      .catch((error) => {
        setTodo(undefined);
        alert("error fetching data: " + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <TaskWrapper
      path={{
        next: "/routing",
        prev: "/form",
      }}
      num={3}
      title="API Integration"
      question={
        <p>
          Fetch data from the following API endpoint:
          https://jsonplaceholder.typicode.com/todos/1. Display the fetched data
          in a React component, showing at least the title of the todo item.
        </p>
      }
      solution={
        <ul className="list-disc list-inside text-sm">
          <li>provide state ro set the data</li>
          <li>
            create fetcher inside <i>useEffect</i>
          </li>
          <li>
            add handler api hit success and error, and add loading handler
          </li>
          <li>show the data</li>
        </ul>
      }
    >
      <div className="flex flex-col gap-8 items-center justify-center col-span-2">
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            {todo ? (
              <TodoCard
                completed={todo.completed}
                id={todo.id}
                title={todo.title}
              />
            ) : (
              <p>todo is not found</p>
            )}
          </>
        )}
      </div>
    </TaskWrapper>
  );
};

export default Todo;
