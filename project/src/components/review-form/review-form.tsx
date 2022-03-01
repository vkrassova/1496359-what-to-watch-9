import {useState, Fragment} from 'react';

function ReviewForm(): JSX.Element {
  const [statRating, setRating] = useState(8);
  const [reviewText, setReviewText] = useState('');

  const STARS_NUM = 10;

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div
          className="rating__stars"
        >
          {
            Array.from({length: STARS_NUM}, (item, index) => (
              <Fragment key={index}>
                <input
                  className="rating__input"
                  id={`star-${index}`}
                  type="radio"
                  name="rating"
                  value={index}
                  checked={statRating === index}
                  onChange={(evt) => setRating(Number(evt.target.value))}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${index}`}
                >
                  {`Rating ${index}`}
                </label>
              </Fragment>))
          }
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
