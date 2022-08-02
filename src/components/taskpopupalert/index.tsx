import React, { useEffect, useState } from "react";
import { useAlarm } from "../../provider/alarm/AlarmProvider";
import { useTimer } from "../../provider/timer/TimerProvider";
import Popup from "../popup";

const TaskPopupAlert = () => {
  const { remainingTime } = useTimer();
  const alarm = useAlarm();

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (remainingTime === 0) {
      setShowPopup(true);
    }
  }, [remainingTime, setShowPopup]);

  return (
    <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
      <h1 className="text-center">Time is up!</h1>

      <button
        className="bg-blue-700 text-white border-2 border-blue-700 p-2 pl-3 pr-3 text-center rounded-sm w-full mt-3"
        onClick={() => {
          alarm.stop();
          setShowPopup(false);
        }}
      >
        Close
      </button>
    </Popup>
  );
};
export default TaskPopupAlert;
