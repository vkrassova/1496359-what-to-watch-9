import {Link} from 'react-router-dom';
import {Film} from '../../types/films';
import VideoPlayer from '../video-player/video-player';
import {useRef} from 'react';

type FilmCardProps = {
  film: Film,
};

function FilmCard({film}: FilmCardProps): JSX.Element {
  const {id, name} = film;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  let timer: ReturnType<typeof setTimeout>;

  const onMouseEnterHandler = () => {
    timer = setTimeout(() => {
      videoRef.current && videoRef.current.play();
    }, 1000);
  };

  const onMouseLeaveHandler = () => {
    videoRef.current && videoRef.current.load();
    clearTimeout(timer);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="small-film-card__image">

        <VideoPlayer autoPlay={false} film={film} videoRef={videoRef}/>

      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
