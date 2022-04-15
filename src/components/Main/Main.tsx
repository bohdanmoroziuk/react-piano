import KeyboardController from 'components/KeyboardController';
import NoAudioMessage from 'components/NoAudioMessage';

import useAudioContext from 'hooks/useAudioContext';

export default function Main() {
  const [, isAudioContextAvailable] = useAudioContext();

  return isAudioContextAvailable
    ? <KeyboardController />
    : <NoAudioMessage />
};
