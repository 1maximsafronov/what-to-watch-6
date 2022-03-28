import React, {useEffect} from "react";
import {useParams, Link, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getMovieById, getMovieLoadedStatus} from "store/app-process/selector";
import {getAuthorizationStatus} from "store/user-data/selector";
import {fetchOneMovie, sendNewComment} from "store/api-actions";
import {AuthorizationStatus} from "const.js";

// import Breadcrumbs from "../../blocks/breadcrumbs/breadcrumbs";
import AddReviewForm from "../../blocks/add-review-form/add-review-form";
import MovieCard from "../../blocks/movie-card/movie-card";

const AddReviewPage = (props) => {
  const {movie, onMovieLoad, isMovieLoaded, onReviewSend, authStatus} = props;
  const {name} = movie;
  const {id} = useParams();
  const {id: movieId} = movie;

  if (authStatus === AuthorizationStatus.NO_AUTH) {
    return <Redirect to="/login"/>;
  }

  useEffect(() => {
    onMovieLoad(id);
  }, [id]);

  if (!isMovieLoaded) {
    return <p>Loading...</p>;
  }


  const handleReviewSend = (newReview) => {
    onReviewSend(movieId, newReview);
  };

  return (
    <MovieCard
      fullPage
      reviewPage
      movie={movie}
      renderBreadcrumbs={() => (
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={`/films/${movieId}`} className="breadcrumbs__link">
                {name}
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
      )}
      renderReviewForm={() => <AddReviewForm onSubmit={handleReviewSend}/>}
    />
  );
};

AddReviewPage.propTypes = {
  movie: PropTypes.object,
  onMovieLoad: PropTypes.func,
  onReviewSend: PropTypes.func,
  isMovieLoaded: PropTypes.bool,
  authStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  movie: getMovieById(state),
  isMovieLoaded: getMovieLoadedStatus(state),
  authStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onMovieLoad(id) {
    dispatch(fetchOneMovie(id));
  },
  onReviewSend(movieId, newReview) {
    dispatch(sendNewComment(movieId, newReview));
  }
});

export {AddReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPage);
