import Keyboard from 'components/Keyboard';
import NoAudioMessage from 'components/NoAudioMessage';

import useAudioContext from 'hooks/useAudioContext';

export default function Main() {
  const [, isAudioContextAvailable] = useAudioContext();

  return isAudioContextAvailable
    ? <Keyboard />
    : <NoAudioMessage />;
};
