import { Note } from 'domain/note';
import { selectKey } from 'domain/keyboard';
import { PlayNoteHandler, StopNoteHandler } from 'adapters/Soundfont/useSoundfont';

import KeyboardKey from 'components/KeyboardKey';

import styles from 'components/Keyboard/Keyboard.module.css';

export interface KeyboardProps {
  notes: Note[];
  loading: boolean;
  play: PlayNoteHandler;
  stop: StopNoteHandler;
}

export default function Keyboard({ notes, loading, play, stop }: KeyboardProps) {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, index, octave }: Note) => {
        const label = selectKey(octave, index);

        return (
          <KeyboardKey
            key={midi}
            type={type}
            label={label}
            disabled={loading}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
          />
        );
      })}
    </div>
  );
}
