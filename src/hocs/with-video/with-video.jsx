import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";

const withVideo = (Comment) => {
  const WithVideo = (props) => {
    const {src, poster} = props;

    const [isVideoLoading, setVideoLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timer, setTimer] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef();

    useEffect(() => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.play();
          return;
        }
        videoRef.current.pause();
      }
    }, [isPlaying]);


    const percent = (1 - (timer / duration)) * 100;

    const fullScreenClickHandler = () => {
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

    const playButtonClickHandle = () => setIsPlaying(!isPlaying);


    const renderVideo = () => (
      <video
        className="player__video"
        ref={videoRef}
        src={src}
        poster={poster}
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
    );

    return (
      <Comment
        {...props}
        renderVideo={renderVideo}
        duration={timer}
        progress={percent}
        isPlaying={isPlaying}
        isLoading={isVideoLoading}
        onPlayClick={playButtonClickHandle}
        onFullScreenClick={fullScreenClickHandler}
      />
    );
  };

  WithVideo.propTypes = {
    src: PropTypes.string,
    poster: PropTypes.string,
  };

  return WithVideo;
};

export {withVideo};
