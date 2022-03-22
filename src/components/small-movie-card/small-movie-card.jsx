import React, {PureComponent} from "react";
import PropTypes from "prop-types";
// import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: false,
    };

    this._videoPlayTimeout = null;

    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
    this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
  }

  render() {
    // const {isVideoPlaying} = this.state;
    const {movie} = this.props;
    const {name, previewImage} = movie;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this._mouseEnterHandler}
        onMouseLeave={this._mouseLeaveHandler}
      >
        <div className="small-movie-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />

          {/* <VideoPlayer
            src={movie.previewVideoLink}
            poster={previewImage}
            isPlaying={isVideoPlaying}
            muted={true}
            resetOnPause={true}
          /> */}
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">
            {name}
          </a>
        </h3>
      </article>
    );
  }

  _mouseEnterHandler() {
    const {movie, onHover} = this.props;

    this._videoPlayTimeout = setTimeout(() => {
      this.setState({isVideoPlaying: true});
    }, 1000);
    onHover(movie);
  }

  _mouseLeaveHandler() {
    const {onHover} = this.props;

    clearTimeout(this._videoPlayTimeout);
    this.setState({isVideoPlaying: false});
    onHover(null);
  }
}

SmallMovieCard.propTypes = {
  onHover: PropTypes.func,
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string,
  }).isRequired
};

export default SmallMovieCard;
