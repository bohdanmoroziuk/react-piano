import { useState, useRef } from 'react';

import Soundfont, { InstrumentName, Player } from 'soundfont-player';

import { Nullable } from 'domain/types';
import { MidiValue } from 'domain/note';
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from 'domain/sound';

export type SoundfontSettings = {
  AudioContext: AudioContextType;
}

export type LoadInstrumentHandler = (instrument?: InstrumentName) => Promise<void>;

export type PlayNoteHandler = (note: MidiValue) => Promise<void>;

export type StopNoteHandler = (note: MidiValue) => Promise<void>;

export interface SoundfontAdapter {
  loading: boolean;
  current: Nullable<InstrumentName>;
  
  load: LoadInstrumentHandler;
  play: PlayNoteHandler;
  stop: StopNoteHandler;
}

export type UseSoundfont = (settings: SoundfontSettings) => SoundfontAdapter;

const useSoundfont: UseSoundfont = ({ AudioContext }) => {
  let activeNodes: AudioNodesRegistry = {};

  const [current, setCurrent] = useState<Nullable<InstrumentName>>(null);

  const [loading, setLoading] = useState(false);

  const [player, setPlayer] = useState<Nullable<Player>>(null);

  const audio = useRef(new AudioContext());

  const load = async (instrument = DEFAULT_INSTRUMENT) => {
    setLoading(true);

    const player = await Soundfont.instrument(audio.current, instrument);

    setLoading(false);
    setCurrent(instrument);
    setPlayer(player);
  };

  const resume = async () => {
    if (audio.current.state === 'suspended') {
      await audio.current.resume();
    }

    return Promise.resolve();
  };

  const play = async (note: MidiValue) => {
    await resume();

    if (!player) return;

    const node = player.play(note.toString());

    activeNodes = { ...activeNodes, [note]: node };
  }

  const stop = async (note: MidiValue) => {
    await resume();

    if (!activeNodes[note]) return;

    activeNodes[note]!.stop();
    activeNodes = { ...activeNodes, [note]: null };
  };

  return {
    loading,
    current,
    load,
    play,
    stop,
  };
};

export default useSoundfont;
