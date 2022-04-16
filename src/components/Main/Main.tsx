import Playground from 'components/Playground';
import NoAudioMessage from 'components/NoAudioMessage';

import useAudioContext from 'hooks/useAudioContext';

export default function Main() {
  const [, isAudioContextAvailable] = useAudioContext();

  return isAudioContextAvailable
    ? <Playground />
    : <NoAudioMessage />
};
