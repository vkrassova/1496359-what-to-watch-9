import FilmCard from '../film-card/film-card';
import {Film} from '../../types/films';

type FilmsListProps = {
  films: Film[],
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          film={film}
          key={film.id}
        />
      ))}
    </div>
  );
}

export default FilmsList;
