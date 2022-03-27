import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getAuthorizationStatus} from "store/user-data/selector";
import {AuthorizationStatus} from "const";
import {redirectToRoute} from "store/actions";
import {addToFavorite} from "store/api-actions";

const MovieCardButtons = (props) => {
  const {isFavorite, movieId, onFavoriteClick, authorizationStatus, redirect} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button"
        onClick={() => {
          redirect(`/player/${movieId}`);
        }}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button"
        onClick={() => {
          const status = isFavorite ? 0 : 1;
          onFavoriteClick(movieId, status);
        }}
      >
        {isFavorite ? (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
        ) : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        )}
        <span>My list</span>
      </button>
      {isAuthorized && (
        <Link to="/add-review" className="btn movie-card__button">Add review</Link>
      )}

    </div>
  );
};

MovieCardButtons.propTypes = {
  movieId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  isFavorite: PropTypes.bool,
  authorizationStatus: PropTypes.string,
  onFavoriteClick: PropTypes.func,
  redirect: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(id, status) {
    dispatch(addToFavorite(id, status));
  },
  redirect(route) {
    dispatch(redirectToRoute(route));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardButtons);
