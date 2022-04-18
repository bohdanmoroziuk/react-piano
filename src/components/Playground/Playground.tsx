import { InstrumentProvider } from 'contexts/instrument';

import KeyboardController from 'components/KeyboardController';
import InstrumentSelector from 'components/InstrumentSelector';

import styles from 'components/Playground/Playground.module.css';

export default function Playground() {
  return (
    <InstrumentProvider>
      <div className={styles.playground}>
        <KeyboardController />
        <InstrumentSelector />
      </div>
    </InstrumentProvider>
  );
}
