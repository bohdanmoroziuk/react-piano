import { ChangeEvent } from 'react';

import { InstrumentName } from 'soundfont-player';

import { useInstrument, options } from 'contexts/instrument';

import styles from 'components/InstrumentSelector/InstrumentSelector.module.css';

export default function InstrumentSelector() {
  const { instrument, setInstrument } = useInstrument();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const instrument = event.target.value as InstrumentName;

    setInstrument(instrument);
  };

  return (
    <select
      className={styles.instruments}
      value={instrument}
      onChange={handleChange}  
    >
      {options.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
