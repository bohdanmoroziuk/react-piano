import { notes } from 'domain/note';

import useOnMount from 'hooks/useOnMount';
import useAudioContext from 'hooks/useAudioContext';
import useSoundfont from 'adapters/Soundfont/useSoundfont';

import Keyboard from 'components/Keyboard/Keyboard';

export default function KeyBoardController() {
  const [AudioContext] = useAudioContext();

  const { loading, play, stop, load } = useSoundfont({ AudioContext } as { AudioContext: AudioContextType });

  useOnMount(() => { load(); });

  return (
    <Keyboard
      loading={loading}
      play={play}
      stop={stop}
      notes={notes}
    />
  );  
}

