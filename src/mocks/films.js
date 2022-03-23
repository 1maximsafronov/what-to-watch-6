import {adaptMovieToClient} from "../utils/movies.jsx";

const movies = [
  {

    "name": `Seven Years in Tibet`,
    "poster_image": `https://7.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg`,
    "preview_image": `https://7.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg`,
    "background_image": `https://7.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg`,
    "background_color": `#C6CADF`,
    "description": `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`,
    "rating": 3.6,
    "scores_count": 112612,
    "director": `Jean-Jacques Annaud`,
    "starring": [
      `Brad Pitt`,
      `David Thewlis`,
      `BD Wong`
    ],
    "run_time": 136,
    "genre": `Adventure`,
    "released": 1997,
    "id": 1,
    "is_favorite": false,
    "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Fantastic Beasts: The Crimes of Grindelwald`,
    "poster_image": `https://7.react.pages.academy/static/film/poster/Fantastic_Beasts.jpg`,
    "preview_image": `https://7.react.pages.academy/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    "background_image": `https://7.react.pages.academy/static/film/background/Fantastic_Beasts.jpg`,
    "background_color": `#B6A99F`,
    "description": `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
    "rating": 3.4,
    "scores_count": 160757,
    "director": `David Yates`,
    "starring": [
      `Eddie Redmayne`,
      `Katherine Waterston`,
      `Dan Fogler`
    ],
    "run_time": 134,
    "genre": `Fantasy`,
    "released": 2018,
    "id": 2,
    "is_favorite": false,
    "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    "name": `The Revenant`,
    "poster_image": `https://7.react.pages.academy/static/film/poster/Revenant.jpg`,
    "preview_image": `https://7.react.pages.academy/static/film/preview/revenant.jpg`,
    "background_image": `https://7.react.pages.academy/static/film/background/Revenant.jpg`,
    "background_color": `#92918B`,
    "description": `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
    "rating": 4,
    "scores_count": 618498,
    "director": `Alejandro G. Iñárritu`,
    "starring": [
      `Leonardo DiCaprio`,
      `Tom Hardy`,
      `Will Poulter`
    ],
    "run_time": 156,
    "genre": `Action`,
    "released": 2015,
    "id": 3,
    "is_favorite": false,
    "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Johnny English`,
    "poster_image": `https://7.react.pages.academy/static/film/poster/Johnny_English.jpg`,
    "preview_image": `https://7.react.pages.academy/static/film/preview/johnny-english.jpg`,
    "background_image": `https://7.react.pages.academy/static/film/background/Johnny_English.jpg`,
    "background_color": `#F0DBA2`,
    "description": `After a sudden attack on the MI5, Johnny English, Britain's most confident yet unintelligent spy, becomes Britain's only spy.`,
    "rating": 10,
    "scores_count": 136843,
    "director": `Peter Howitt`,
    "starring": [
      `Rowan Atkinson`,
      `John Malkovich`,
      `Natalie Imbruglia`
    ],
    "run_time": 88,
    "genre": `Comedy`,
    "released": 2003,
    "id": 4,
    "is_favorite": false,
    "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
];

const adaptedMovies = movies.map(adaptMovieToClient);
export default adaptedMovies;
