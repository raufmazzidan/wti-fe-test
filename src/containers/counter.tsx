"use client";

import Button from "@/components/button";
import TaskWrapper from "@/components/task-wrapper";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <TaskWrapper
      path={{
        next: "/form",
        prev: "/",
      }}
      num={1}
      title="Component Creation and State Management"
      question={
        <p>
          Create a React component called Counter that displays a number and two
          buttons - &quot;Increment&quot; and &quot;Decrement&quot;. Implement
          the functionality so that clicking &quot;Increment&quot; increases the
          displayed number, and clicking &quot;Decrement&quot; decreases it.
          Ensure that the number cannot go below zero.
        </p>
      }
      solution={
        <ul className="list-disc list-inside text-sm">
          <li>
            create <i>Button</i> component
          </li>
          <li>
            create <i>Counter</i> container
          </li>
          <li>
            use <i>useState</i> to manage the count
          </li>
          <li>
            add handler to ensure <i>count</i> never goes below zero
          </li>
        </ul>
      }
    >
      <div className="flex flex-col gap-8 items-center justify-center col-span-2">
        <p className="text-4xl font-bold">{counter}</p>
        <div className="inline-flex gap-4">
          <Button
            className="w-32"
            onClick={() => {
              if (counter > 0) {
                setCounter((c) => c - 1);
              }
            }}
            disabled={counter <= 0}
          >
            Decrement
          </Button>
          <Button className="w-32" onClick={() => setCounter((c) => c + 1)}>
            Increment
          </Button>
        </div>
      </div>
    </TaskWrapper>
  );
};

export default Counter;
