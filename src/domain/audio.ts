import { Nullable } from 'domain/types';

export const accessAudioContext = (): Nullable<AudioContextType> => (
  window.AudioContext ??
  window.webkitAudioContext ??
  null
);
