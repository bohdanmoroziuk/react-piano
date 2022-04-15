import { notes, Note } from 'domain/note';
import { selectKey } from 'domain/keyboard';

import KeyboardKey from 'components/KeyboardKey';

import styles from 'components/Keyboard/Keyboard.module.css';

const renderNote = ({ midi, type, index, octave }: Note) => {
  const label = selectKey(octave, index);

  return (
    <KeyboardKey key={midi} type={type} label={label} />
  );
};

export default function Keyboard() {
  return (
    <div className={styles.keyboard}>
      {notes.map(renderNote)}
    </div>
  );
}
