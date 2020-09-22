import {
  get_popular_movies,
  get_top_rated_movies,
  get_popular_tv_list,
  get_upcoming_movies,
} from "../api";
import {
  GET_POPULAR_MOVIES,
  GET_POPULAR_TV_SERIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
  SET_SEARCHING,
  FILTER_LISTS,
} from "./Types";

export const fetch_popular_movies = () => async (dispatch) => {
  await get_popular_movies().then((res) => {
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: res.results,
    });
  });
};

export const fetch_top_rated_movies = () => async (dispatch) => {
  await get_top_rated_movies().then((res) => {
    dispatch({
      type: GET_TOP_RATED_MOVIES,
      payload: res.results,
    });
  });
};
export const fetch_popular_tv_series = () => async (dispatch) => {
  await get_popular_tv_list().then((res) => {
    dispatch({
      type: GET_POPULAR_TV_SERIES,
      payload: res.results,
    });
  });
};
export const fetch_upcoming_movies = () => async (dispatch) => {
  await get_upcoming_movies().then((res) => {
    dispatch({
      type: GET_UPCOMING_MOVIES,
      payload: res.results,
    });
  });
};

export const set_Searching = (text) => ({
  type: SET_SEARCHING,
  payload: text,
});

export const filter_lists = (movies) => ({
  type: FILTER_LISTS,
  payload: movies,
});
