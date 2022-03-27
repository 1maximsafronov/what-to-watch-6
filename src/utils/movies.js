export const adaptMovieToClient = (movie) => {
  return {
    "id": movie[`id`],
    "name": movie[`name`],
    "poster": movie[`posterImage`],
    "previewImage": movie[`previewImage`],
    "backgroundImage": movie[`backgroundImage`],
    "backgroundColor": movie[`backgroundColor`],
    "videoLink": movie[`videoLink`],
    "previewVideo": movie[`previewVideoLink`],
    "description": movie[`description`],
    "rating": movie[`rating`],
    "scores": movie[`scoresCount`],
    "director": movie[`director`],
    "starring": movie[`starring`],
    "runTime": movie[`runTime`],
    "genre": movie[`genre`],
    "released": movie[`released`],
    "isFavorite": movie[`isFavorite`]
  };
};


// !Старый адаптер для 7 потока
// export const adaptMovieToClient = (movie) => {
//   return {
//     "id": movie[`id`],
//     "name": movie[`name`],
//     "poster": movie[`poster_image`],
//     "previewImage": movie[`preview_image`],
//     "backgroundImage": movie[`background_image`],
//     "backgroundColor": movie[`background_color`],
//     "videoLink": movie[`video_link`],
//     "previewVideo": movie[`preview_video_link`],
//     "description": movie[`description`],
//     "rating": movie[`rating`],
//     "scores": movie[`scores_count`],
//     "director": movie[`director`],
//     "starring": movie[`starring`],
//     "runTime": movie[`run_time`],
//     "genre": movie[`genre`],
//     "released": movie[`released`],
//     "isFavorite": movie[`is_favorite`]
//   };
// };

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

export const getRatinLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  }
  if (rating >= 3 && rating < 5) {
    return `Normal`;
  }
  if (rating >= 5 && rating < 8) {
    return `Good`;
  }
  if (rating >= 8 && rating < 10) {
    return `Very good`;
  }

  return `Awesome`;
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

--------------
    9 ПОТОК курса

{
    "name": "War of the Worlds",
    "posterImage": "https://9.react.pages.academy/static/film/poster/War_of_the_Worlds.jpg",
    "previewImage": "https://9.react.pages.academy/static/film/preview/war-of-the-worlds.jpg",
    "backgroundImage": "https://9.react.pages.academy/static/film/background/War_of_the_Worlds.jpg",
    "backgroundColor": "#9B7E61",
    "description": "As Earth is invaded by alien tripod fighting machines, one family fights for survival.",
    "rating": 9.3,
    "scoresCount": 386834,
    "director": "Steven Spielberg",
    "starring": [
      "Tom Cruise",
      "Dakota Fanning",
      "Tim Robbins"
    ],
    "runTime": 116,
    "genre": "Adventure",
    "released": 2005,
    "id": 1,
    "isFavorite": false,
    "videoLink": "https://9.react.pages.academy/static/film/video/matrix.mp4",
    "previewVideoLink": "https://9.react.pages.academy/static/film/video/dog.mp4"
  },
*/
