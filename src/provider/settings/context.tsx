import { createContext } from "react";
import { ISettings, ISettingsContext } from "./types";

export const defaultSettings: ISettings = {
  alarmSound: "",
  taskTime: 5,
  taskExtraTime: 5,
  breakTime: 3,
  breakExtraTime: 3,
};

export const SettingsContext = createContext<ISettingsContext>({
  settings: defaultSettings,
  toggleSettingsPopup: () => {},
  saveSettings: (_settings: ISettings) => {},
});
