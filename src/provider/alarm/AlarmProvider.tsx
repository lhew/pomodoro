import { ReactNode, useContext, useState } from "react";
import useAudio from "../../hooks/useAudio";
import { AlarmContext } from "./context";
import { IAlarmContext } from "./types";

export interface AlarmProviderProps {
  children: ReactNode;
}
/**
 * This provider aims to be top-level due to the fact that it is responsible for
 * playing the sound without being paused by a new re-render, once it's managed
 * using refs.
 * @param param0 { children: ReactNode }
 * @returns
 */
const AlarmProvider = ({ children }: AlarmProviderProps) => {
  const audio = useAudio();
  const [_alarm, _setAlarm] = useState("");

  const play = () => {
    audio.play();
  };
  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const setAlarm = (alarm: string) => {
    const alarmPath = `/alarms/${alarm}.mp3`;
    audio.src = alarmPath;
    _setAlarm(alarmPath);
  };

  return (
    <AlarmContext.Provider value={{ setAlarm, play, stop }}>
      {children}
    </AlarmContext.Provider>
  );
};

export const useAlarm = (): IAlarmContext => useContext(AlarmContext);

export default AlarmProvider;
