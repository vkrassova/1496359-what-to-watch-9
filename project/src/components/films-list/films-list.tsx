import FilmCard from '../film-card/film-card';
import {Film} from '../../types/films';
import {useState} from 'react';

type FilmsListProps = {
  films: Film[],
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [activeFilmCardId, setActiveFilmCardId] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard film={film} key={film.id} active={film.id === activeFilmCardId} onHover={setActiveFilmCardId}/>
      ))}
    </div>
  );
}

export default FilmsList;
