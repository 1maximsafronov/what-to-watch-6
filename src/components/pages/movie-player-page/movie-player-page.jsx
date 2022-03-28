import React, {useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getMovieById, getMovieLoadedStatus} from "store/app-process/selector.js";
import {fetchOneMovie} from "store/api-actions.js";
import {resetMovieById} from "store/actions.js";

import Player from "components/blocks/player/player";
import {withVideo} from "hocs/with-video/with-video";

const VideoPlayer = withVideo(Player);

const MoviePlayerPage = (props) => {
  const {id} = useParams();
  const history = useHistory();
  const {movie, loadData, isDataLoaded} = props;
  const {previewImage, videoLink, name} = movie;

  useEffect(() => {
    loadData(id);
  }, [id]);

  if (!isDataLoaded) {
    return <p>Loading...</p>;
  }

  const onExitClick = () => {
    if (history.length > 2) {
      history.goBack();
    } else {
      history.push(`/`);
    }
  };

  return (
    <VideoPlayer
      title={name}
      src={videoLink}
      pposter={previewImage}
      onExitClick={onExitClick}
    />
  );
};

MoviePlayerPage.propTypes = {
  movie: PropTypes.object,
  loadData: PropTypes.func,
  isDataLoaded: PropTypes.bool
};

const mapStateToProps = (state) => ({
  movie: getMovieById(state),
  isDataLoaded: getMovieLoadedStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadData(id) {
    dispatch(resetMovieById());
    dispatch(fetchOneMovie(id));
  }
});

export {MoviePlayerPage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePlayerPage);
