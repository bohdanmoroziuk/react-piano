import { InstrumentName, Player } from 'soundfont-player';

import { Nullable } from 'domain/types';
import { MidiValue } from 'domain/note';

export { default as instruments } from 'soundfont-player/names/musyngkite.json';

export const DEFAULT_INSTRUMENT: InstrumentName = 'acoustic_grand_piano';

export type AudioNodesRegistry = Record<MidiValue, Nullable<Player>>;
