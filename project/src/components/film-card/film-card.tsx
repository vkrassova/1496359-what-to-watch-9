import {Link} from 'react-router-dom';
import {Film} from '../../types/films';
import VideoPlayer from '../video-player/video-player';
import {useState} from 'react';

type FilmCardProps = {
  film: Film,
};

function FilmCard({film}: FilmCardProps): JSX.Element {
  const {id, name} = film;

  let timer: ReturnType<typeof setTimeout>;
  const [isPlay, setIsPlay] = useState(false);

  const onMouseEnterHandler = () => {
    timer = setTimeout(() => {
      setIsPlay(true);
    }, 1000);
  };

  const onMouseLeaveHandler = () => {
    setIsPlay(false);
    clearTimeout(timer);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="small-film-card__image">

        <VideoPlayer autoPlay={false} film={film} isPlay={isPlay}/>

      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
