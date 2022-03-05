import {Film} from '../../types/films';

type VideoPlayerProps = {
  autoPlay: boolean,
  film: Film,
  videoRef: React.LegacyRef<HTMLVideoElement>,
};

function VideoPlayer({autoPlay, film, videoRef}: VideoPlayerProps): JSX.Element {
  const {previewVideoLink, posterImage} = film;

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
