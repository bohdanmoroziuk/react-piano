import { useRef, useMemo } from 'react';

import { accessAudioContext } from 'domain/audio';

export default function useAudioContext() {
  const ref = useRef(accessAudioContext());

  const isAvailable = useMemo(() => !!ref.current, [ref]);

  return [ref.current, isAvailable] as const;
}
