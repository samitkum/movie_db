import axios from "axios";

const BASE_API_URL = "https://api.themoviedb.org/3/";
const BASE_IMG_API = "https://image.tmdb.org/t/p/";

const API_KEY = "f67c6a87d3fb18353bdda796836d40f0";

// generate the query
const generate_queries = (params = {}) => {
  return {
    api_key: API_KEY,
    language: "en-US",
    ...params,
  };
};

// Generate the url
const generate_url = (path, param = {}) => {
  const params = generate_queries(param);
  const url = `${BASE_API_URL}${path}`;
  return { url, params };
};

// Get the popular movies
export const get_popular_movies = (page = 1) => {
  const { url, params } = generate_url("movie/popular", { page });

  return handleApiCall(url, params);
};

export const get_top_rated_movies = (page = 1) => {
  const { url, params } = generate_url("movie/top_rated", { page });

  return handleApiCall(url, params);
};

export const get_upcoming_movies = (page = 1) => {
  const { url, params } = generate_url("movie/upcoming", { page });

  return handleApiCall(url, params);
};

export const get_movie = (movieId) => {
  const { url, params } = generate_url(`movie/${movieId}`);
  return handleApiCall(url, params);
};

export const get_similar_movie = (movieId) => {
  const { url, params } = generate_url(`movie/${movieId}/similar`);
  return handleApiCall(url, params);
};

export const get_recommended_movies = (movieId) => {
  const { url, params } = generate_url(`movie/${movieId}/recommendations`);
  return handleApiCall(url, params);
};

export const get_movie_credits = (movieId) => {
  const { url, params } = generate_url(`movie/${movieId}/credits`);
  return handleApiCall(url, params);
};

export const get_image_url = (movie, size = "original") => {
  if (movie?.backdrop_path) {
    return `${BASE_IMG_API}${size}${movie.backdrop_path}`;
  }
  return "no image found";
};

export const get_popular_tv_list = (page = 1) => {
  const { url, params } = generate_url("tv/popular", { page });
  return handleApiCall(url, params);
};
// handle async api calls and return the data
const handleApiCall = async (url, params = {}) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
