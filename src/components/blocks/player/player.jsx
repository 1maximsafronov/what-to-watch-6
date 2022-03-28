import React from "react";
import PropTypes from "prop-types";

import ExitButton from "./exit-button/exit-button";
import PlayerControls from "./controls/controls";

const Player = (props) => {
  const {
    title,
    isPlaying,
    isLoading,
    onExitClick,
    duration,
    progress,
    onPlayClick,
    onFullScreenClick,
    renderVideo
  } = props;

  return (
    <div className="player">
      {renderVideo && renderVideo()}

      <ExitButton onClick={onExitClick}/>

      <PlayerControls
        title={title}
        isPlaying={isPlaying}
        isLoading={isLoading}
        duration={duration}
        progress={progress}
        onPlayClick={onPlayClick}
        onFullScreenClick={onFullScreenClick}
      />
    </div>
  );
};

Player.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.number,
  progress: PropTypes.number,
  isPlaying: PropTypes.bool,
  isLoading: PropTypes.bool,
  onExitClick: PropTypes.func,
  onPlayClick: PropTypes.func,
  onFullScreenClick: PropTypes.func,
  renderVideo: PropTypes.func,
};

export default Player;
