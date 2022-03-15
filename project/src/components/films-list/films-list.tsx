import FilmCard from '../film-card/film-card';
import {Film} from '../../types/films';

type FilmsListProps = {
  films: Film[],
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  return (
    <>
      {films.map((film) => (
        <FilmCard
          film={film}
          key={film.id}
        />
      ))}
    </>
  );
}

export default FilmsList;
