export type RoomInfo = {
  id: string;
  users: User[];
  now: {
    index: number;
  };
  playlist: VideoData[];
};

export type UserPerms = {
  name: string;
  color: string;
  add_video: boolean;
  set_video: boolean;
  change_time: boolean;
  set_mod: boolean;
};

export type User = {
  id: string;
  username: string;
  perms: number;
};

export const PermsList: UserPerms[] = [
  {
    name: 'user',
    color: 'gray',
    add_video: true,
    set_video: false,
    change_time: false,
    set_mod: false,
  },
  {
    name: 'mod',
    color: 'blue',
    add_video: true,
    set_video: true,
    change_time: true,
    set_mod: false,
  },
  {
    name: 'owner',
    color: 'red',
    add_video: true, // add to playlist
    set_video: true, // set now video
    change_time: true, // set video time
    set_mod: true, // set mod perm
  },
];

export type VideoData = {
  id: string;
  title: string;
  thumbnail: string;
  duration: number;
  channel: {
    name: string;
    url: string;
  };
  formats: Array<{
    url: string;
    width: number;
    height: number;
  }>;
};
