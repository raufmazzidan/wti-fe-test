import { FC, PropsWithChildren, ReactNode } from "react";
import Button from "./button";
import Link from "next/link";

export interface ITaskWrapper {
  num: number;
  title: string;
  question: ReactNode;
  solution: ReactNode;
  path: {
    next: string;
    prev: string;
  };
}

const TaskWrapper: FC<PropsWithChildren<ITaskWrapper>> = (props) => {
  const { num, title, question, solution, children, path } = props;

  return (
    <section className="grid grid-cols-3 h-screen max-lg:grid-cols-1">
      <div className="flex flex-col gap-8 items-center justify-center col-span-2 max-lg:pt-8">
        {children}
      </div>
      <div className="bg-violet-100 p-8 flex justify-between flex-col max-lg:order-first">
        <div>
          <p className="text-gray-500 font-medium underline">Task {num}</p>
          <h1 className=" mt-8 font-semibold text-2xl">{title}</h1>
          <div className="mt-2 text-sm">{question}</div>
          <h2 className="font-semibold mt-6">Solution:</h2>
          <div className="mt-2 text-sm">{solution}</div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-8">
          <Link href={path.prev}>
            <Button variant="outline">Prev</Button>
          </Link>
          <Link href={path.next}>
            <Button>Next</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TaskWrapper;
