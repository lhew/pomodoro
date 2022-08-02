import { ReactNode, useContext, useEffect, useState } from "react";
import { SettingsContext } from "./context";
import { ISettings, ISettingsContext } from "./types";
import SettingsPopup from "../../components/settingspopup";
import { useRepository } from "../repository/RepositoryProvider";
import { useAlarm } from "../alarm/AlarmProvider";

interface SettingsProps {
  children: ReactNode;
}

const SettingsProvider = ({ children }: SettingsProps) => {
  const { updateSettings, getSettings } = useRepository();
  const [_settings, _saveSettings] = useState<ISettings>(getSettings());
  const [_isOpen, _setIsOpen] = useState(false);

  const { setAlarm } = useAlarm();

  useEffect(() => {
    if (_settings.alarmSound) {
      setAlarm(_settings.alarmSound);
    }
  }, [_settings, setAlarm]);

  return (
    <SettingsContext.Provider
      value={{
        settings: _settings,
        toggleSettingsPopup() {
          _setIsOpen(!_isOpen);
        },
        saveSettings(settings: ISettings) {
          _saveSettings(settings);
          updateSettings(settings);
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
