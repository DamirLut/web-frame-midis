import React from 'react';
import style from './style.module.scss';
import IconPlay from '../../assets/icons/play.svg';
import IconPause from '../../assets/icons/pause.svg';
import IconFullscreen from '../../assets/icons/fullscreen.svg';

function formatTime(time: number) {
  const minutes = '' + Math.trunc((time % 3600) / 60);
  const seconds = '' + Math.trunc((time % 3600) % 60);
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}

export default function VideoWrapper({ src }: { src: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const progressRef = React.useRef<HTMLProgressElement>(null);
  const playButtonRef = React.useRef<HTMLImageElement>(null);
  const [videoState, setVideoState] = React.useState({
    duration: 0,
    position: 0,
    playing: false,
  });

  const resize = () => {
    if (wrapperRef.current && videoRef.current) {
      wrapperRef.current.style.height = videoRef.current.clientHeight + 'px';
    }
  };

  const onLoad = (e: any) => {
    resize();
    setVideoState((prev) => ({ ...prev, duration: videoRef.current?.duration || 0 }));
  };

  const SwitchStatus = () => {
    const playing = !videoState.playing;
    setVideoState((prev) => ({ ...prev, playing }));
    if (playing) {
      videoRef.current?.play();
      if (playButtonRef.current) {
        playButtonRef.current.src = IconPause;
      }
    } else {
      videoRef.current?.pause();
      if (playButtonRef.current) {
        playButtonRef.current.src = IconPlay;
      }
    }
  };

  React.useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.ontimeupdate = (e) => {
        setVideoState((prev) => ({ ...prev, position: video.currentTime }));
      };
    }
  }, [videoRef.current]);

  React.useEffect(() => {
    if (progressRef.current) {
      const progress = progressRef.current;
      const update = (e: MouseEvent) => {
        const pos = (e.pageX - progress.offsetLeft - 16) / progress.offsetWidth;
        if (videoRef.current) {
          videoRef.current.currentTime = pos * videoState.duration;
        }
      };
      progress.addEventListener('click', update);
      return () => {
        progress.removeEventListener('click', update);
      };
    }
  }, [progressRef.current]);

  React.useEffect(() => {
    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={style['video-wrapper']} ref={wrapperRef}>
      <video
        src={src}
        ref={videoRef}
        onLoadedMetadata={onLoad}
        preload="metadata"
        onClick={SwitchStatus}
      />
      <div className={style['video-controls']}>
        <progress ref={progressRef} value={videoState.position / videoState.duration} />
        <div>
          <div>
            <button className={style.button} onClick={SwitchStatus}>
              <img src={IconPlay} ref={playButtonRef} />
            </button>
            <div>
              <time id="time-elapsed">{formatTime(videoState.position)}</time>
              <span> / </span>
              <time id="duration">{formatTime(videoState.duration)}</time>
            </div>
          </div>
          <button className={style.button}>
            <img src={IconFullscreen} />
          </button>
        </div>
      </div>
    </div>
  );
}
