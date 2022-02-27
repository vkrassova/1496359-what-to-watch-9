import FilmCard from '../film-card/film-card';
import {Film} from '../../types/films';
import {useState} from 'react';

type FilmsListProps = {
  films: Film[],
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [activeFilmCardId, setActiveFilmCardId] = useState<number | null>(null);
  const hanldeMouseOver = (id: number) => {
    setActiveFilmCardId(id);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <article className="small-film-card catalog__films-card" key={film.id} onMouseEnter={() => {hanldeMouseOver(film.id);}}>
          <FilmCard film={film}/>
        </article>
      ))}
      {activeFilmCardId}
    </div>
  );
}

export default FilmsList;
