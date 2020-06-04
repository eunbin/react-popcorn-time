import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params['api_key'] = "c06256df7807ecd3f0d9bce6a971179a";
  config.params['language'] = "en-US";
  return config;
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term => api.get("search/movie", {
    params: {
      query: encodeURIComponent(term)
    }
  }),
}

export const TVApi = {
  topRated: () => api.get("tv/top_rated"),
  upcoming: () => api.get("tv/now_playing"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: (id) => api.get(`tv/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: term => api.get("search/tv", {
    params: {
      query: encodeURIComponent(term)
    }
  }),
}
