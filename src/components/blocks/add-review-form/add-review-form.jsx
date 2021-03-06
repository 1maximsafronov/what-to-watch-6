import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

const MIN_TEXT_LENGTH = 50;
const MAX_TEXT_LENGTH = 400;

const AddReviewForm = ({onSubmit}) => {
  const [isFormValid, setFormValid] = useState(false);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState(``);

  useEffect(() => {
    if (text.length > MIN_TEXT_LENGTH && text.length < MAX_TEXT_LENGTH && rating !== 0) {
      setFormValid(true);
      return;
    }
    setFormValid(false);

  }, [rating, text]);

  const ratingChangeHandler = (evt) => {
    if (evt.target.tagName === `INPUT`) {
      setRating(evt.target.value);
    }
  };

  const textChangeHandler = (evt) => {
    const value = evt.target.value;
    if (value.length < 400) {
      setText(evt.target.value);
    }
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    if (isFormValid) {
      onSubmit({rating, comment: text});
    }
  };

  return (
    <div className="add-review">
      <form onSubmit={formSubmitHandler} action="#" className="add-review__form">
        <div className="rating" onChange={ratingChangeHandler}>
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value="6"/>
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value="8" />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea"
            placeholder="Review text"
            name="review-text"
            id="review-text"
            onChange={textChangeHandler}
            value={text}
          />
          <div className="add-review__submit">
            <button disabled={!isFormValid} className="add-review__btn" type="submit">
              Post <small>({text.length}/{MAX_TEXT_LENGTH})</small>
              {!isFormValid && `!`}
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddReviewForm;
