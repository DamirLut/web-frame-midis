import { atom } from 'recoil';
import { RoomInfo } from '../lib/type';

export const RoomAtom = atom<RoomInfo>({
  key: 'room.atom',
  default: { id: '', users: [], now: null, playlist: [] },
});
