import dayjs from "dayjs";
import React, { useContext, VFC } from "react";
import TimerProvider, { useTimer } from "../../provider/TimerProvider";
import { formattedSeconds } from "../../utils/formattedSeconds";
import ProgressCircle from "../progresscircle";
import TimerDisplay from "../timerdisplay";

const Timer: VFC = () => {
  const {
    initialRemainingTime,
    remainingTime,
    timerState,
    toggleTimer,
    reset,
  } = useTimer();
  const progress = parseInt(`${(remainingTime / initialRemainingTime) * 100}`);

  return (
    <div style={{ position: "relative", width: 300, height: 300, left: 3 }}>
      <ProgressCircle
        progress={Math.abs((isNaN(progress) ? 0 : progress) - 100)}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          zIndex: 2,
          marginLeft: "-2em",
          marginTop: "-3em",
        }}
      >
        <button
          onClick={() => {
            toggleTimer();
          }}
        >
          {timerState === "stopped" ? "Start" : "Stop"} - {progress}
        </button>{" "}
        <button onClick={() => reset()}>Reset</button>
        <TimerDisplay time={remainingTime} />
      </div>
    </div>
  );
};

export default Timer;
