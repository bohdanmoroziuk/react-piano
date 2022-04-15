import { MouseEventHandler } from 'react';

import { NoteType } from 'domain/note';
import { Key } from 'domain/keyboard';

import styles from 'components/KeyboardKey/KeyboardKey.module.css';

export interface KeyboardKeyProps {
  type: NoteType;
  label: Key;
  disabled?: boolean;
  onDown: MouseEventHandler<HTMLButtonElement>;
  onUp: MouseEventHandler<HTMLButtonElement>;
}

export default function KeyboardKey({ type, label, disabled, onDown, onUp }: KeyboardKeyProps) {
  return (
    <button
      className={`${styles.key} ${styles[type]}`}
      type="button"  
      disabled={disabled}
      onMouseDown={onDown}
      onMouseUp={onUp}
    >
      {label}
    </button>
  );
}
