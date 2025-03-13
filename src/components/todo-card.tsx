import { FC } from "react";
import Status from "./status";

export interface ITodoCard {
  completed: boolean;
  id: number;
  title: string;
}

const TodoCard: FC<ITodoCard> = (props) => {
  const { completed, title, id } = props;
  return (
    <div className="border rounded w-sm border-violet-500 bg-violet-50 shadow p-4">
      <p className="text-xl font-semibold">
        [{id}] {title}
      </p>
      <Status
        label={completed ? "Completed" : "Not Completed"}
        color={completed ? "green" : "red"}
      />
      <p className="text-xs leading-4 text-gray-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s
      </p>
    </div>
  );
};

export default TodoCard;
