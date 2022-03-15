import {Film, FilmReview} from '../../types/films';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import MovieTabOverview from '../movie-tabs-overview/movie-tabs-overview';
import MovieTabReview from '../movie-tab-review/movie-tab-review';
import MovieTabDetails from '../movie-tab-details/movie-tab-details';

type MovieTabsProps = {
  film: Film,
  reviews: FilmReview[],
}

type MovieTab = {
  'id': number,
  title: string
}

function MovieTabs({film, reviews}: MovieTabsProps): JSX.Element {
  const movieTabs: MovieTab[] = [
    {
      'id': 1,
      'title': 'Overview',
    },
    {
      'id': 2,
      'title': 'Details',
    },
    {
      'id': 3,
      'title': 'Reviews',
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(1);
  const hanldeClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {movieTabs.map((tab) => (
            <li
              key={tab.id}
              className={`film-nav__item ${tab.id === activeTab ? 'film-nav__item--active' : ''}`}
              onClick={() => {
                hanldeClick(tab.id);
              }}
            >
              <Link className="film-nav__link" to={''}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === 1 && <MovieTabOverview film={film}/>}
      {activeTab === 2 && <MovieTabDetails film={film}/>}
      {activeTab === 3 && <MovieTabReview reviews={reviews}/>}
    </div>
  );
}

export default MovieTabs;
