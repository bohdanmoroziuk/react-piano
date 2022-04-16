import clsx from 'clsx';

import { NoteType } from 'domain/note';
import { Key } from 'domain/keyboard';
import usePressObserver from 'hooks/usePressObserver';

import styles from 'components/KeyboardKey/KeyboardKey.module.css';

export interface KeyboardKeyProps {
  type: NoteType;
  label: Key;
  disabled?: boolean;
  onDown: () => void;
  onUp: () => void;
}

export default function KeyboardKey({ type, label, onDown, onUp, ...rest }: KeyboardKeyProps) {
  const isPressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp,
  });

  return (
    <button
      className={clsx(styles.key, styles[type], { 'is-pressed': isPressed })}
      type="button"  
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {label}
    </button>
  );
}
