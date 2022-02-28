import {Film} from '../../types/films';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import ReviewForm from '../review-form/review-form';

type FilmReviewsProps = {
  film: Film,
}

function AddReview({film}: FilmReviewsProps): JSX.Element {
  const {id, name, backgroundImage, posterImage} = film;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
}

export default AddReview;
