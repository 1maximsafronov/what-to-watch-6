import React, {useEffect, useState, useRef} from "react";
import {useParams, useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getMovieById, getMovieLoadedStatus} from "../../store/app-process/selector";
import {resetMovieById} from "../../store/actions";
import {fetchOneMovie} from "../../store/api-actions";

const formatTime = (current) => {
  let h = Math.floor(current / 60 / 60);
  let m = Math.floor(current / 60);
  let s = Math.floor(current % 60);

  if (h < 10) {
    h = `0${h}`;
  }

  if (m < 10) {
    m = `0${m}`;
  }

  if (s < 10) {
    s = `0${s}`;
  }

  return `-${h}:${m}:${s}`;
};

const MoviePlayerPage = (props) => {
  const {movie, loadData, isDataLoaded} = props;
  const [isVideoLoading, setVideoLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [duration, setDuration] = useState(0);
  const {id} = useParams();
  const history = useHistory();
  const videoRef = useRef();
  const {previewImage, videoLink, name} = movie;

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

  const percent = (1 - (timer / duration)) * 100;

  const fullScreenBtnClickHandler = () => {
    const video = videoRef.current;
    if (video.requestFullScreen) {
      video.requestFullScreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullScreen) {
      video.webkitRequestFullScreen();
    } else if (video.msRequestFullScreen) {
      video.msRequestFullScreen();
    }
  };

  return (
    <div className="player">
      <video
        ref={videoRef}
        className="player__video"
        src={videoLink} poster={previewImage}
        onCanPlayThrough={() => {
          setVideoLoading(false);
          setDuration(videoRef.current.duration);
        }}
        onTimeUpdate={() => {
          const newTimer = duration - Math.floor(videoRef.current.currentTime);
          setTimer(newTimer);
        }}
        // onPlay={() => setIsPlaying(true)}
        // onPause={() => setIsPlaying(false)}
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
            <progress className="player__progress" value={`${percent}`} max="100"></progress>
            <div className="player__toggler" style={{left: `${percent}%`}}>Toggler</div>
          </div>
          {/* <div className="player__time-value">1:30:29</div> */}
          <div className="player__time-value">{formatTime(timer)}</div>
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
          {isVideoLoading ? (
            <div className="player__name">Video is loading...</div>
          ) : (
            <div className="player__name">{name}</div>
          )}

          <button type="button" className="player__full-screen"
            onClick={fullScreenBtnClickHandler}
          >
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
