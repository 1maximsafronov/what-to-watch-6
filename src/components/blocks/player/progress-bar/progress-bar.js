import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {formatDuration} from "utils/common.js";

const PropgressBar = ({progress, duration, onProgressChange}) => {

  return (
    <Fragment>
      <div className="player__time">
        <progress className="player__progress" value={`${progress}`} max="100"/>
        <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
      </div>

      <div className="player__time-value"> -{formatDuration(duration)}</div>
    </Fragment>
  );
};

PropgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  onProgressChange: PropTypes.func,
};

export default PropgressBar;


/*

Формат выводимого времени

    hh:mm:ss

<div className="player__time-value">1:30:29</div>

*/
