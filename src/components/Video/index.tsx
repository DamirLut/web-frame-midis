import React from 'react';
import { useRecoilValue } from 'recoil';
import { SocketContext } from '../../context/socket';
import { RoomAtom } from '../../store/RoomAtom';
import style from './style.module.scss';
import VideoWrapper from './video';

export default function Video() {
  const [url, setURL] = React.useState('');
  const socket = React.useContext(SocketContext);
  const room = useRecoilValue(RoomAtom);

  const setVideo = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      if (url) {
        const regex = /v=([a-zA-Z0-9_-]*)/gm;
        const id = regex.exec(url)?.at(1);
        if (id) {
          socket.emit('playlist-add', { videoId: id });
        }
      }
    }
  };

  if (room.playlist.length == 0) {
    return (
      <div className={style['video-container']}>
        <h1>Плейлист пустой, добавьте видео!</h1>
        <input
          placeholder="Ссылка на видео"
          type="url"
          value={url}
          onChange={(e) => setURL(e.target.value)}
          onKeyDown={setVideo}
        />
      </div>
    );
  }

  return (
    <div className={style['video-container']}>
      <VideoWrapper src={room.playlist[0].formats.at(-1)?.url || ''} />
      <h1>{room.playlist[0].title}</h1>
      <input
        placeholder="Ссылка на видео"
        type="url"
        value={url}
        onChange={(e) => setURL(e.target.value)}
        onKeyDown={setVideo}
      />
    </div>
  );
}
