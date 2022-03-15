import {useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../constants';

type FilmCardBtnsProps = {
  id: number,
}

function FilmCardButtons({id}: FilmCardBtnsProps): JSX.Element {
  const navigate = useNavigate();
  const onClickPlay = () => {
    navigate(`/player/${id}`);
  };

  const onClickAdd = () => {
    navigate(AppRoutes.MyList);
  };

  return (
    <>
      <button
        className="btn btn--play film-card__button"
        type="button"
        onClick={onClickPlay}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={onClickAdd}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
    </>
  );
}

export default FilmCardButtons;
