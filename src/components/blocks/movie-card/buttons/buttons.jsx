import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getAuthorizationStatus} from "store/user-data/selector";
import {AuthorizationStatus} from "const";
import {redirectToRoute} from "store/actions";
import {addToFavorite} from "store/api-actions";
import BtnPlay from "../btn-play/btn-play";
import BtnList from "../btn-list/btn-list";

const MovieCardButtons = (props) => {
  const {isFavorite, movieId, onFavoriteClick, authorizationStatus, redirect} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const onPlayClickHandler = () =>redirect(`/player/${movieId}`);
  const onListClickHandler = () => {
    const status = isFavorite ? 0 : 1;
    onFavoriteClick(movieId, status);
  };
  const renderAddReviewBtn = () => (
    <Link to={`/films/${movieId}/review`} className="btn movie-card__button">
      Add review
    </Link>
  );

  return (
    <div className="movie-card__buttons">
      <BtnPlay className="movie-card__button" onClick={onPlayClickHandler}/>

      <BtnList className="movie-card__button" onClick={onListClickHandler} isActive={isFavorite}/>

      {isAuthorized && renderAddReviewBtn()}
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
