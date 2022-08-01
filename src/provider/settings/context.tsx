import { createContext } from "react";
import { ISettings, ISettingsContext } from "./types";

export const SettingsContext = createContext<ISettingsContext>({
  settings: {
    alarmSound: "",
    breakTime: 3,
    taskTime: 5,
  },
  toggleSettingsPopup: () => {},
  saveSettings: (_settings: ISettings) => {},
});
