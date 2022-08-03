import React from "react";
import Image from "next/image";
import { useTimer } from "../../provider/timer/TimerProvider";
const Splash = () => {
  const { timerMode } = useTimer();
  return (
    <div className="flex flex-col text-center mt-10  mb-10">
      <div className="mb-2">
        <Image
          src={`/images/${timerMode === "work" ? "tomato" : "coffee"}.svg`}
          width={60}
          height={60}
          alt=""
        />
      </div>
      <h1>Pomodoro</h1>
      <span>Get stuff done today</span>
    </div>
  );
};

export default Splash;
