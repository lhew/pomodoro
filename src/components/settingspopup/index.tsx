import React from "react";
import Popup from "../popup";
import { Formik, Form, Field } from "formik";
import { useSettings } from "../../provider/settings/SettingsProvider";

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
  const alarms = [
    { name: "Alarm Buzzer", value: "alarm" },
    { name: "Casino", value: "casino" },
    { name: "Jackpot", value: "jackpot" },
    { name: "Sci Fi", value: "sci-fi" },
  ];
  return (
    <Popup isOpen onClose={() => {}}>
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
        {() => (
          <Form>
            <ul>
              <li>Tasks</li>
              <li>
                <span>Normal time</span>
                <span>
                  <Field
                    name="taskTime"
                    type="number"
                    placeholder="Values in seconds"
                    min="3"
                    max="1500"
                  />
                </span>
              </li>
              <li>
                <span>Extra time</span>
                <span>
                  <Field
                    name="taskExtraTime"
                    type="number"
                    placeholder="Values in seconds"
                    min="3"
                    max="1500"
                  />
                </span>
              </li>
              <li>Breaks</li>
              <li>
                <span>Normal time</span>
                <span>
                  <Field
                    name="breakTime"
                    type="number"
                    placeholder="Values in seconds"
                    min="3"
                    max="600"
                  />
                </span>
              </li>
              <li>
                <span>Extra time</span>
                <span>
                  <Field
                    name="breakExtraTime"
                    type="number"
                    placeholder="Values in seconds"
                    min="3"
                    max="600"
                  />
                </span>
              </li>
              <li>
                <span>Alarm sound</span>
                <span>
                  <Field name="alarmSound" as="select">
                    <option>No sound</option>
                    {alarms.map((alarm) => (
                      <option key={alarm.value} value={alarm.value}>
                        {alarm.name}
                      </option>
                    ))}
                  </Field>
                </span>
              </li>
              <li>
                <button>Ok</button>
                <button>Cancel</button>
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </Popup>
  );
};

export default SettingsPopup;
