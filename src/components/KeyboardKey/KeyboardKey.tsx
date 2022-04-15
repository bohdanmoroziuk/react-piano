import { NoteType } from 'domain/note';
import { Key } from 'domain/keyboard';

import styles from 'components/KeyboardKey/KeyboardKey.module.css';

export interface KeyboardKeyProps {
  type: NoteType;
  label: Key;
  disabled?: boolean;
}

export default function KeyboardKey({ type, label, disabled }: KeyboardKeyProps) {
  return (
    <button
      className={`${styles.key} ${styles[type]}`}
      type="button"  
      disabled={disabled}
    >
      {label}
    </button>
  );
}
