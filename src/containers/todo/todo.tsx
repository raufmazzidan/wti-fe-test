"use client";

import TaskWrapper from "@/components/task-wrapper";
import classFusion from "@/utils/class-fusion";

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
              <div className="border rounded w-sm border-violet-500 bg-violet-50 shadow p-4">
                <p className="text-xl font-semibold">
                  [{todo.id}] {todo.title}
                </p>
                <div
                  className={classFusion(
                    "px-2 py-1 rounded-xs inline-flex text-xs uppercase font-semibold bg-red-500 text-white my-2",
                    {
                      "bg-green-600": todo.completed,
                    }
                  )}
                >
                  {todo.completed ? "Completed" : "Not Completed"}
                </div>
                <p className="text-xs leading-4 text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </p>
              </div>
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
