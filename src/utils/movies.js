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

export const formatRunTime = (value) => {
  const h = Math.floor(value / 60);
  const m = value % 60;
  let str = ``;
  if (h > 0) {
    str += `${h}h `;
  }
  if (m > 0) {
    str += `${m}m`;
  }

  return str;
};


/*
{
  "id": 1,
  "name": "The Grand Budapest Hotel",
  "poster_image": "img/the-grand-budapest-hotel-poster.jpg",
  "preview_image": "img/the-grand-budapest-hotel.jpg",
  "background_image": "img/the-grand-budapest-hotel-bg.jpg",
  "background_color": "#ffffff",
  "video_link": "https://some-link",
  "preview_video_link": "https://some-link",
  "description": "In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.",
  "rating": 8.9,
  "scores_count": 240,
  "director": "Wes Anderson",
  "starring": ["Bill Murray", "Edward Norton", "Jude Law", "Willem Dafoe", "Saoirse Ronan"],
  "run_time": 99,
  "genre": "Comedy",
  "released": 2014,
  "is_favorite": false
}

*/
