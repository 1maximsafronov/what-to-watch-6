import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();

    this.state = {
      isPlaying: this.props.isPlaying,
    };

  }

  render() {
    return (
      <video ref={this._videoRef}/>
    );
  }

  componentDidMount() {
    const {src, poster, muted, resetOnPause} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.muted = muted;

    // video.oncanplaythrough = () =>{
    //   this.setState({isLoading: false});
    // };

    // video.onplay = () =>{
    //   this.setState({isPlaying: true});
    // };

    video.onpause = () =>{
      this.setState({isPlaying: false});
      if (resetOnPause) {
        video.load();
      }
    };
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;


    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.poster = ``;
    video.src = ``;
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  resetOnPause: PropTypes.bool,
  muted: PropTypes.bool
};


export default VideoPlayer;
