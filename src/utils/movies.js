export const adaptMovieToClient = (movie) => {
  return {
    "id": movie[`id`],
    "name": movie[`name`],
    "poster": movie[`poster_image`],
    "previewImage": movie[`preview_image`],
    "backgroundImage": movie[`background_image`],
    "backgroundColor": movie[`background_color`],
    "video": movie[`video_link`],
    "previewVideo": movie[`preview_video_link`],
    "description": movie[`description`],
    "rating": movie[`rating`],
    "scores": movie[`scores_count`],
    "director": movie[`director`],
    "starring": movie[`starring`],
    "runTime": movie[`run_time`],
    "genre": movie[`genre`],
    "released": movie[`released`],
    "isFavorite": movie[`is_favorite`]
  };
};
