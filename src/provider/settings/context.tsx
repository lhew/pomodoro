import { createContext } from "react";
import { ISettings, ISettingsContext } from "./types";

export const defaultSettings: ISettings = {
  alarmSound: "sci-fi",
  taskTime: 5,
  taskExtraTime: 5,
  breakTime: 3,
  breakExtraTime: 3,
  showNotifications: false,
};

export const SettingsContext = createContext<ISettingsContext>({
  settings: defaultSettings,
  toggleSettingsPopup: () => {
    // do nothing
  },
  saveSettings: (_settings: ISettings) => {
    // do nothing here too
  },
});
