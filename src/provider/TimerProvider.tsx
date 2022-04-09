import { createContext, FC, ReactNo } from "react";

const TimerContext = createContext({
  start() {
    return null;
  },
  stop() {
    return null;
  },
  reset() {
    return null;
  },
  finish() {
    return null;
  },
});

const TimerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <TimerContext.Provider
      value={{
        start() {
          return null;
        },
        stop() {
          return null;
        },
        reset() {
          return null;
        },
        finish() {
          return null;
        },
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
