import FilmsList from '../films-list/films-list';
import {Film, FilmReview} from '../../types/films';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import MovieTabs from '../movie-tabs/movie-tabs';
import {useParams, Link} from 'react-router-dom';
import {getFilmById} from '../../utils/utils';

type FilmPageProps = {
  films: Film[],
  reviews: FilmReview[],
};

const CATALOG_FILMS_NUMBER = 4;

function FilmPage({films, reviews}: FilmPageProps): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  const film = getFilmById(films, id) as Film;
  const filteredFilms = films
    .filter((item) => (item.genre === film.genre && item.name !== film.name))
    .slice(0, CATALOG_FILMS_NUMBER);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">

            <Logo/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <FilmCardButtons id={id}/>
                <Link to={`/films/${film?.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <MovieTabs film={film} reviews={reviews} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {
              <FilmsList films={filteredFilms} />
            }
          </div>
        </section>

        <footer className="page-footer">
          <Logo theme="light"/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmPage;
