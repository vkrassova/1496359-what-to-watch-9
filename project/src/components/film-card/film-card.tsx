import {Link} from 'react-router-dom';
import {Film} from '../../types/films';

type FilmCardProps = {
  film: Film,
  active: boolean,
  onHover: (id: number) => void,
};

function FilmCard({film, active, onHover}: FilmCardProps): JSX.Element {
  const {id, name, posterImage} = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onHover(id)}
    >
      <div className="small-film-card__image">
        <img
          src={posterImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
