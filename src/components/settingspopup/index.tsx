import React from "react";
import Popup from "../popup";
import { Formik } from "formik";
import { useSettings } from "../../provider/settings/SettingsProvider";
import SettingsForm from "./SettingsForm";

const SettingsPopup = () => {
  const {
    settings: {
      taskTime,
      breakTime,
      alarmSound,
      taskExtraTime,
      breakExtraTime,
      showNotifications,
    },
    toggleSettingsPopup,
    saveSettings,
  } = useSettings();

  return (
    <Popup isOpen onClose={() => toggleSettingsPopup()}>
      <h4 className="font-bold">Settings</h4>
      <hr className="mb-3" />
      <Formik
        enableReinitialize
        initialValues={{
          taskTime,
          taskExtraTime,
          breakTime,
          breakExtraTime,
          alarmSound,
          showNotifications,
        }}
        onSubmit={(values) => {
          saveSettings(values);
          toggleSettingsPopup();
        }}
      >
        <SettingsForm onCancel={() => toggleSettingsPopup()} />
      </Formik>
    </Popup>
  );
};

export default SettingsPopup;
