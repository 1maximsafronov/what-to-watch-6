import React from "react";
import PropTypes from "prop-types";

import PropgressBar from "../progress-bar/progress-bar";
import PlayButton from "../play-button/play-button";
import FullScreenButton from "../full-screen-button/full-screen-button";

const PlayerControls = (props) => {
  const {
    title,
    isPlaying,
    isLoading,
    progress,
    duration,
    onPlayClick,
    onFullScreenClick,
  } = props;

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <PropgressBar progress={progress} duration={duration}/>
      </div>

      <div className="player__controls-row">
        <PlayButton isPlaying={isPlaying} disabled={isLoading}
          onClick={onPlayClick}
        />

        <div className="player__name">{title}</div>

        <FullScreenButton onClick={onFullScreenClick} />
      </div>
    </div>
  );
};

PlayerControls.propTypes = {
  title: PropTypes.string,
  isPlaying: PropTypes.bool,
  isLoading: PropTypes.bool,
  progress: PropTypes.number,
  duration: PropTypes.number,
  onPlayClick: PropTypes.func,
  onFullScreenClick: PropTypes.func
};

export default PlayerControls;
