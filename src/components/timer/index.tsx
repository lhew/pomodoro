import dayjs from "dayjs";
import React, { VFC } from "react";
import { formattedSeconds } from "../../utils/formattedSeconds";
import ProgressCircle from "../progresscircle";
import TimerDisplay from "../timerdisplay";

const Timer: VFC<{ end: Date; start: Date }> = ({ start, end }) => {
  if (!dayjs(end).isValid()) {
    return null;
  }

  const now = dayjs();
  const endTime = dayjs(end);

  const diff = dayjs(endTime).diff(dayjs(start));
  const remaining = Math.max(endTime.diff(now) / 1000, 0);
  const progress = parseInt(`${(remaining / (diff / 1000)) * 100}`);

  return (
    <div style={{ position: "relative", width: 300, height: 300, left: 3 }}>
      <ProgressCircle progress={Math.abs(progress - 100)} />
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
        <TimerDisplay time={remaining} />
      </div>
    </div>
  );
};

export default Timer;
