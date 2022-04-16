import { createContext, ReactNode, useContext, useMemo, useState,  } from 'react';

import { InstrumentName } from 'soundfont-player';

import { DEFAULT_INSTRUMENT, instruments } from 'domain/sound';

export interface InstrumentContextValue {
  instrument: InstrumentName;
  setInstrument: (instrument: InstrumentName) => void;
}

export const InstrumentContext = createContext<InstrumentContextValue>({} as InstrumentContextValue);

export const useInstrument = () => {
  const instrument = useContext(InstrumentContext);

  if (instrument) return instrument;

  throw new Error('No instrument provided');
};

export interface InstrumentProviderProps {
  children?: ReactNode;
}

export function InstrumentProvider({ children }: InstrumentProviderProps) {
  const [instrument, setInstrument] = useState<InstrumentName>(DEFAULT_INSTRUMENT);

  const value = useMemo(() => ({
    instrument,
    setInstrument
  }), [instrument]);

  return (
    <InstrumentContext.Provider value={value}>
      {children}
    </InstrumentContext.Provider>
  );
};

export type InstrumentOption = {
  value: InstrumentName;
  label: string;
}

export type InstrumentOptions = InstrumentOption[];

export type Instruments = InstrumentName[];

function normalizeList(list: Instruments): InstrumentOptions {
  return list.map((instrument) => ({
    value: instrument,
    label: instrument.replace(/_/gi, ' '),
  }));
}

export const options = normalizeList(instruments as Instruments);
