import React from 'react';
import { SocketContext } from '../../context/socket';
import style from './style.module.scss';
import SearchIcon from '../../assets/icons/search.svg';

export default function Search() {
  const [url, setURL] = React.useState('');
  const socket = React.useContext(SocketContext);

  const addPlayList = () => {
    if (url) {
      const regex = /v=([a-zA-Z0-9_-]*)/gm;
      const id = regex.exec(url)?.at(1);
      if (id) {
        socket.emit('playlist-add', { videoId: id });
      }
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      addPlayList();
    }
  };

  return (
    <div className={style['search-input']}>
      <input
        placeholder="Ссылка на видео"
        type="url"
        value={url}
        onChange={(e) => setURL(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <img src={SearchIcon} onClick={addPlayList} />
    </div>
  );
}
