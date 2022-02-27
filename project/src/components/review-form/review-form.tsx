import {FilmRating} from '../../types/films';
import {useState} from 'react';

type ReviewFormProps = {
  ratings: FilmRating[],
};

function ReviewForm({ratings}: ReviewFormProps): JSX.Element {
  const [statRating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratings.map((item) => (
            <>
              <input
                className="rating__input"
                type="radio"
                name="rating"
                key={item.id}
                id={`star-${item.id}`}
                value={statRating}
                onChange={(evt) => setRating(Number(evt.target.value))}
              />
              <label
                className="rating__label"
                htmlFor={`star-${item.id}`}
              >
                {`Rating ${item.id}`}
              </label>
            </>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          value={reviewText} onChange={(evt) => setReviewText(evt.target.value)}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
