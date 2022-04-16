import { useState, useEffect } from 'react';

export type KeyLabel = string;

export type IsPressed = boolean;

export type EventCode = string;

export type PressHandler = () => void;

export type PressObserverSettings = {
  watchKey: KeyLabel;
  onStartPress: PressHandler;
  onFinishPress: PressHandler;
}

const fromEventCode = (code: EventCode): KeyLabel => {
  const prefixRegex = /Key|Digit/gi;

  return code.replace(prefixRegex, '');
};

const equal = (watchedKey: KeyLabel, eventCode: EventCode): boolean => {
  return (
    fromEventCode(eventCode).toUpperCase() ===
    watchedKey.toUpperCase()
  );
};

export default function usePressObserver({
  watchKey,
  onStartPress,
  onFinishPress,
}: PressObserverSettings): IsPressed {
  const [pressed, setPressed] = useState<IsPressed>(false);

  useEffect(() => {
    function handlePressStart(event: KeyboardEvent) {
      if (pressed || !equal(watchKey, event.code)) return;

      setPressed(true);
      onStartPress();
    };

    function handlePressFinish(event: KeyboardEvent) {
      if (!pressed || !equal(watchKey, event.code)) return;

      setPressed(false);
      onFinishPress();
    };

    document.addEventListener('keydown', handlePressStart);
    document.addEventListener('keyup', handlePressFinish);

    return () => {
      document.removeEventListener('keydown', handlePressStart);
      document.removeEventListener('keyup', handlePressFinish);
    };
  }, [watchKey, pressed, onStartPress, onFinishPress]);

  return pressed;
}