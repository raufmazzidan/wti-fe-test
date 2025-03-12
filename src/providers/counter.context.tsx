"use client";

import noop from "@/utils/noop";
import React, { createContext, FC, PropsWithChildren, useState } from "react";

interface ICounterContext {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const CounterContext = createContext<ICounterContext>({
  counter: 0,
  setCounter: noop as React.Dispatch<React.SetStateAction<number>>,
});

const Provider = CounterContext.Provider;

export const CounterProvider: FC<PropsWithChildren> = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {props.children}
    </Provider>
  );
};

export default CounterContext;
