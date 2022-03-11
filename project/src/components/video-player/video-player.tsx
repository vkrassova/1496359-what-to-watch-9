import {Film} from '../../types/films';
import {useRef, useEffect} from 'react';

type VideoPlayerProps = {
  autoPlay: boolean,
  film: Film,
  isPlay: boolean,
};

function VideoPlayer({autoPlay, film, isPlay}: VideoPlayerProps): JSX.Element {
  const {previewVideoLink, posterImage} = film;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if(isPlay) {
      videoRef.current?.play();
    } else {
      videoRef.current?.load();
    }
  }, [isPlay]);

  return (
    <video
      width="100%"
      height="100%"
      poster={posterImage}
      autoPlay={autoPlay}
      ref={videoRef}
      muted
    >
      <source src={previewVideoLink}/>
    </video>
  );
}

export default VideoPlayer;
