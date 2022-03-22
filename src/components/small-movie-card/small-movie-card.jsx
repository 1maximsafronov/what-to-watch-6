import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: false,
    };

    this._videoPlayTimeout = null;
  }

  render() {
    const {movie, onHover} = this.props;
    const {name, previewImage} = movie;
    return (
      <article
        onMouseEnter={() => {
          this._videoPlayTimeout = setTimeout(() => {
            this.setState({isVideoPlaying: true});
          }, 1000);
          onHover(movie);
        }}
        onMouseLeave={()=>{
          clearTimeout(this._videoPlayTimeout);
          this.setState({isVideoPlaying: false});
          onHover(null);
        }}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          {/* <img src={previewImage} alt={name} width="280" height="175" /> */}
          <VideoPlayer
            src={movie.previewVideoLink}
            poster={previewImage}
            isPlaying={this.state.isVideoPlaying}
            muted={true}
            resetOnPause={true}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">
            {name}
          </a>
        </h3>
      </article>
    );
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
