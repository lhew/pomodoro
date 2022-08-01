import { v4 } from "uuid";

import { ReactNode, useContext, useState } from "react";
import { SettingsContext } from "./context";
import { ISettings, ISettingsContext } from "./types";
import SettingsPopup from "../../components/settingspopup";

interface SettingsProps {
  children: ReactNode;
}

const SettingsProvider = ({ children }: SettingsProps) => {
  const [_settings, _saveSettings] = useState<ISettings>({
    alarmSound: "",
    breakTime: 3,
    taskTime: 5,
  });

  const [_isOpen, _setIsOpen] = useState(false);

  return (
    <SettingsContext.Provider
      value={{
        settings: _settings,
        toggleSettingsPopup() {
          _setIsOpen(!_isOpen);
        },
        saveSettings(_settings: ISettings) {
          _saveSettings(_settings);
        },
      }}
    >
      <>
        {children}
        {_isOpen && <SettingsPopup />}
      </>
    </SettingsContext.Provider>
  );
};

export const useSettings = (): ISettingsContext => useContext(SettingsContext);

export default SettingsProvider;
