import { useEffect } from 'react';

import { notes } from 'domain/note';

import useAudioContext from 'hooks/useAudioContext';
import useSoundfont from 'adapters/Soundfont/useSoundfont';
import { useInstrument } from 'contexts/instrument';

import Keyboard from 'components/Keyboard/Keyboard';

export default function KeyBoardController() {
  const [AudioContext] = useAudioContext();

  const { instrument } = useInstrument();

  const { current, loading, play, stop, load } = useSoundfont({ AudioContext } as { AudioContext: AudioContextType });

  useEffect(() => {
    if (!loading && instrument !== current) {
      load(instrument);
    }
  }, [current, instrument, loading, load]);

  return (
    <Keyboard
      loading={loading}
      play={play}
      stop={stop}
      notes={notes}
    />
  );  
}
