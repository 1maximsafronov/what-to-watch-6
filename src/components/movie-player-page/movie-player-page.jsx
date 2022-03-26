import React, {useEffect, useState, useRef} from "react";
import {useParams, useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getMovieById, getMovieLoadedStatus} from "../../store/app-process/selector";
import {resetMovieById} from "../../store/actions";
import {fetchOneMovie} from "../../store/api-actions";

const MoviePlayerPage = (props) => {
  const {movie, loadData, isDataLoaded} = props;
  const [isVideoLoading, setVideoLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const {id} = useParams();
  const history = useHistory();
  const videoRef = useRef();
  const {previewImage, videoLink} = movie;

  useEffect(() => {
    loadData(id);
  }, [id]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
        return;
      }
      videoRef.current.pause();
    }
  }, [isPlaying]);

  if (!isDataLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="player">
      <video
        ref={videoRef}
        className="player__video"
        src={videoLink} poster={previewImage}
        onCanPlayThrough={() => setVideoLoading(false)}
        onTimeUpdate={() => {
          setCurrentTime(videoRef.current.currentTime);
        }}
      />

      <button type="button" className="player__exit"
        onClick={() => {

          if (history.length > 2) {
            history.goBack();
          } else {
            history.push(`/`);
          }

        }}
      >Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          {/* <div className="player__time-value">1:30:29</div> */}
          <div className="player__time-value">{Math.floor(currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            disabled={isVideoLoading}
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            {isPlaying ? (
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
            ) : (
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
            )}
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
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
