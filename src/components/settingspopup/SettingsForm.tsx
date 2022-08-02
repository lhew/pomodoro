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

const SettingsForm = () => {
  const {
    values: { alarmSound },
  } = useFormikContext<ISettings>();

  const iconRef = useRef<HTMLLIElement>(null);
  const audio = useAudio(`/alarms/${alarmSound}.mp3`);

  useEffect(() => {
    if (alarmSound !== "No sound") {
      audio.src = `/alarms/${alarmSound}.mp3`;
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
          <button>Ok</button>
          <button>Cancel</button>
        </li>
      </ul>
    </Form>
  );
};

export default SettingsForm;
