import React, {Fragment} from "react";
import PropTypes from "prop-types";


const PlayButton = (props) => {
  const {onClick, isPlaying, disabled} = props;

  const pauseIcon = <Fragment>
    <svg viewBox="0 0 14 21" width="14" height="21">
      <use xlinkHref="#pause"></use>
    </svg>
    <span>Pause</span>
  </Fragment>;

  const playIcon = <Fragment>
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </Fragment>;

  return (
    <button className="player__play" type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {isPlaying ? pauseIcon : playIcon}
    </button>
  );
};

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

export default PlayButton;
