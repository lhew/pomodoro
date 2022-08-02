import React, { useEffect, useRef } from "react";
import { Icons } from "../../generated/icons/types";
import { Form, useFormikContext, Field } from "formik";
import { ISettings } from "../../provider/settings/types";
import useAudio from "../../hooks/useAudio";

const alarms = [
  { name: "Sci Fi", value: "sci-fi" },
  { name: "Alarm Buzzer", value: "buzzer" },
  { name: "Casino", value: "casino" },
  { name: "Jackpot", value: "jackpot" },
];

const alarmPath = (alarmSound = "") => `/static/audio/${alarmSound}.mp3`;

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
