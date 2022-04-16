import { InstrumentProvider } from 'contexts/instrument';

import KeyboardController from 'components/KeyboardController';
import InstrumentSelector from 'components/InstrumentSelector';

export default function Playground() {
  return (
    <InstrumentProvider>
      <div className="playground">
        <KeyboardController />
        <InstrumentSelector />
      </div>
    </InstrumentProvider>
  );
}
