import React, { useEffect, useRef } from "react";
import { Icons } from "../../generated/icons/types";
import { Form, useFormikContext, Field } from "formik";
import { ISettings } from "../../provider/settings/types";
import useAudio from "../../hooks/useAudio";
import Input from "../ui/input";
import FormField from "../ui/formfield";
import Select from "../ui/select";

const alarms = [
  { name: "Sci Fi", value: "sci-fi" },
  { name: "Alarm Buzzer", value: "buzzer" },
  { name: "Casino", value: "casino" },
  { name: "Jackpot", value: "jackpot" },
];

const alarmPath = (alarmSound = "") => `/alarms/${alarmSound}.mp3`;

const SettingsForm = () => {
  const {
    values: { alarmSound },
  } = useFormikContext<ISettings>();

  const iconRef = useRef<HTMLLIElement>(null);
  const audio = useAudio(alarmPath(alarmSound));

  useEffect(() => {
    if (alarmSound !== "No sound") {
      audio.src = alarmPath(alarmSound);
      audio.load();
      if (iconRef.current) iconRef.current.className = Icons.PLAY;
    }
  }, [alarmSound, audio]);

  return (
    <Form>
      <ul>
        <li>Tasks</li>
        <li>
          <FormField>
            <span>Normal time</span>
            <Field
              name="taskTime"
              type="number"
              placeholder="Values in seconds"
              min="3"
              max="1500"
              component={Input}
            />
          </FormField>
        </li>
        <li>
          <FormField>
            <span>Extra time</span>
            <Field
              name="taskExtraTime"
              type="number"
              placeholder="Values in seconds"
              min="3"
              max="1500"
              component={Input}
            />
          </FormField>
        </li>
        <li>Breaks</li>
        <li>
          <FormField>
            <span>Normal time</span>
            <Field
              name="breakTime"
              type="number"
              placeholder="Values in seconds"
              min="3"
              max="600"
              component={Input}
            />
          </FormField>
        </li>
        <li>
          <FormField>
            <span>Extra time</span>
            <Field
              name="breakExtraTime"
              type="number"
              placeholder="Values in seconds"
              min="3"
              max="600"
              component={Input}
            />
          </FormField>
        </li>
        <li>
          <FormField>
            <span>Alarm sound</span>
            <div className="grid grid-cols-[1fr_auto] gap-x-2">
              <Field name="alarmSound" as="select" component={Select}>
                <option>No sound</option>
                {alarms.map((alarm) => (
                  <option key={alarm.value} value={alarm.value}>
                    {alarm.name}
                  </option>
                ))}
              </Field>

              <button
                disabled={alarmSound === "No sound"}
                onClick={(e) => {
                  e.preventDefault();
                  if (audio.paused) {
                    audio.play();
                  } else {
                    audio.currentTime = 0;
                    audio.pause();
                  }
                  iconRef.current?.classList.toggle(Icons.STOP);
                  audio.onended = () => {
                    iconRef.current?.classList.toggle(Icons.STOP);
                  };
                }}
              >
                <i ref={iconRef} className={Icons.PLAY} />
              </button>
            </div>
          </FormField>
        </li>
        <li>
          <hr className="my-3 " />
        </li>
        <li className="grid grid-cols-2  gap-x-3">
          <button className="bg-blue-700 text-white border-2 border-blue-700 p-2 pl-3 pr-3 text-center rounded-sm mt-3">
            Ok
          </button>
          <button className="bg-gray-400 text-white border-2 border-gray-400 p-2 pl-3 pr-3 text-center rounded-sm mt-3">
            Cancel
          </button>
        </li>
      </ul>
    </Form>
  );
};

export default SettingsForm;
