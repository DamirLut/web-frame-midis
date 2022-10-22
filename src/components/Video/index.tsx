import React from 'react';
import { useRecoilValue } from 'recoil';
import { SocketContext } from '../../context/socket';
import { RoomAtom } from '../../store/RoomAtom';
import style from './style.module.scss';
import VideoWrapper from './video';
import YTSearchIcon from '../../assets/search.svg';
import { formatTime } from '../../lib/tools';
import Search from '../Search';
import Div from '../Div';
import Recommendation from '../Recommendation';

export default function Video() {
  const socket = React.useContext(SocketContext);
  const room = useRecoilValue(RoomAtom);

  const setVideo = (index: number) => {
    if (room.now.index != index) socket.emit('playlist-set', { index });
  };

  if (room.playlist.length == 0) {
    return (
      <div className={style['no-video-container']}>
        <img src={YTSearchIcon} />
        <label>
          Прямой ссылкой
          <Search />
        </label>
        <Recommendation />
      </div>
    );
  }

  const current = room.now.index != -1 ? room.now.index : 0;
  const currentVideo = room.playlist[current];

  return (
    <div className={style['video-container']}>
      <VideoWrapper src={currentVideo.formats.at(-1)?.url || ''} />
      <Div className={style['video-info']}>
        <h3>{currentVideo.title}</h3>
        <a target="_blank" href={currentVideo.channel.url}>
          {currentVideo.channel.name}
        </a>
      </Div>
      <Div className={style['video-manager']}>
        <label>
          Добавить видео
          <Search />
        </label>
        <div className={style['playlist']}>
          {room.playlist.map((video, i) => (
            <div
              key={video.id}
              className={i == current ? style['current-video'] : ''}
              onClick={() => setVideo(i)}>
              <img src={video.thumbnail} />
              <div>
                <b>{video.title}</b>
                <span>{video.channel.name}</span>
                <small>{formatTime(video.duration)}</small>
              </div>
            </div>
          ))}
        </div>
      </Div>
    </div>
  );
}
