export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";
  export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

  export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMBD_AUTH_KEY
    }
  };

  export const NOW_PLAYING_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";
  export const POPULAR_PLAYING_API =  "https://api.themoviedb.org/3/movie/top_rated?page=1"
  export const MOVIES_VIDEO_API =  "https://api.themoviedb.org/3/movie/";
  export const TMDB_IMAGE = "https://image.tmdb.org/t/p/w500";
  export const SEARCH_MOVIE = "https://api.themoviedb.org/3/search/movie?query="
  export const SUPPORTED_LANG = [
    {identifier:'en',name:'English' },
    {identifier:'hindi',name:'Hindi' }
  ];
  export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;