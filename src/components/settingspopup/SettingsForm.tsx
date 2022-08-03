import React, { useEffect, useRef, useState } from "react";
import { Icons } from "../../generated/icons/types";
import { Form, useFormikContext, Field } from "formik";
import { ISettings } from "../../provider/settings/types";
import useAudio from "../../hooks/useAudio";
import Input from "../ui/input";
import FormField from "../ui/formfield";
import Select from "../ui/select";
import Button from "../ui/button";

const alarms = [
  { name: "Sci Fi", value: "sci-fi" },
  { name: "Alarm Buzzer", value: "buzzer" },
  { name: "Casino", value: "casino" },
  { name: "Jackpot", value: "jackpot" },
];

const alarmPath = (alarmSound = "") => `/alarms/${alarmSound}.mp3`;

interface SettingsFormProps {
  onCancel?: () => void;
}

const SettingsForm = ({ onCancel = () => null }: SettingsFormProps) => {
  const {
    values: { alarmSound, showNotifications },
  } = useFormikContext<ISettings>();

  const iconRef = useRef<HTMLLIElement>(null);
  const audio = useAudio(alarmPath(alarmSound));

  const [notificationStatus, setNotificationStatus] =
    useState<NotificationPermission>();

  useEffect(() => {
    if (alarmSound !== "No sound") {
      audio.src = alarmPath(alarmSound);
      audio.load();
      if (iconRef.current) iconRef.current.className = Icons.PLAY;
    }
  }, [alarmSound, audio]);

  useEffect(() => {
    if (showNotifications) {
      Notification.requestPermission().then((result) => {
        setNotificationStatus(result);
      });
    }
  }, [showNotifications]);

  return (
    <Form>
      <ul>
        <li>
          <h5 className="mb-2 font-bold">Tasks</h5>
        </li>
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
        <li>
          <h5 className="mb-2 font-bold">Breaks</h5>
        </li>
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
          <FormField>
            <span className="my-3 grid grid-cols-[auto_1fr_auto]">
              <Field
                name="showNotifications"
                type="checkbox"
                id="show-notifications"
                defaultValue={showNotifications}
                component={Input}
              />
              <label htmlFor="show-notifications" className="ml-3">
                Show notifications
              </label>
              {showNotifications && notificationStatus !== "default" && (
                <i
                  title={
                    notificationStatus === "denied"
                      ? "Check your browser settings to enable notifications"
                      : "Notifications are enabled"
                  }
                  className={
                    notificationStatus === "denied" ? Icons.ATTENTION : Icons.OK
                  }
                />
              )}
            </span>
          </FormField>
        </li>
        <li>
          <hr className="my-3 " />
        </li>
        <li className="grid grid-cols-2  gap-x-3">
          <Button>Ok</Button>
          <Button
            type="button"
            secondary
            onClick={() => {
              onCancel();
            }}
          >
            Cancel
          </Button>
        </li>
      </ul>
    </Form>
  );
};

export default SettingsForm;
