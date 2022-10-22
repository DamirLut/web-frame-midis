import React from 'react';
import { SocketContext } from '../../context/socket';
import { VideoData } from '../../lib/type';
import Div from '../Div';

import style from './style.module.scss';

export default function Recommendation() {
  const socket = React.useContext(SocketContext);
  const [videos, setVideos] = React.useState<VideoData[]>([]);

  React.useEffect(() => {
    fetch('https://ytt.iky.su/trending')
      .then((res) => res.json())
      .then(({ data }) => {
        setVideos(data);
      });
  }, []);

  const addVideo = (id: string) => {
    socket.emit('playlist-add', { videoId: id });
  };

  return (
    <Div className={style.container}>
      <h4>Рекомендации</h4>
      <div className={style.grid}>
        {videos.map((video) => (
          <div onClick={() => addVideo(video.id)}>
            <img src={video.thumbnail} />
            <div>
              <span>{video.title.substr(0, 32)}...</span>
            </div>
          </div>
        ))}
      </div>
    </Div>
  );
}
