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
    },
    toggleSettingsPopup,
    saveSettings,
  } = useSettings();

  return (
    <Popup isOpen onClose={() => null}>
      <h4 className="font-bold">Settings</h4>
      <hr className="mb-3" />
      <Formik
        initialValues={{
          taskTime,
          taskExtraTime,
          breakTime,
          breakExtraTime,
          alarmSound,
        }}
        onSubmit={(values) => {
          saveSettings(values);
          toggleSettingsPopup();
        }}
      >
        <SettingsForm />
      </Formik>
    </Popup>
  );
};

export default SettingsPopup;
