"use client";

import TaskWrapper from "@/components/task-wrapper";
import Link from "next/link";
import { FC } from "react";

interface IRouting {
  title: string;
}

const Routing: FC<IRouting> = ({ title }) => {
  return (
    <TaskWrapper
      path={{
        next: "/",
        prev: "/todo",
      }}
      num={4}
      title="Routing"
      question={
        <>
          Create a multi-page React application with two routes:
          <ul className="list-disc list-inside">
            <li>Home page</li>
            <li>About page</li>
            <li>
              navigation links to switch between the Home and About pages.
            </li>
          </ul>
        </>
      }
      solution={
        <ul className="list-disc list-inside text-sm">
          <li>
            create routing folder inside <i>/app</i>
          </li>
          <li>
            add <i>{`<Link/>`}</i> each page to route the page
          </li>
        </ul>
      }
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="inline-flex gap-3 justify-center">
        <Link className="hover:underline" href="/routing">
          Home
        </Link>
        <Link className="hover:underline" href="/routing/about">
          About
        </Link>
      </div>
    </TaskWrapper>
  );
};

export default Routing;
