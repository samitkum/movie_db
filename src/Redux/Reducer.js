import {
  GET_POPULAR_MOVIES,
  GET_POPULAR_TV_SERIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
  SET_SEARCHING,
  FILTER_LISTS,
} from "./Types";

const initialState = {
  popular_movies: null,
  upcoming_movies: null,
  top_rated_movies: null,
  popular_tv_series: null,
  selected_movie: null,
  bookmark: false,
  setSearching: "default",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popular_movies: action.payload,
      };
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcoming_movies: action.payload,
      };
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        top_rated_movies: action.payload,
      };
    case GET_POPULAR_TV_SERIES:
      return {
        ...state,
        popular_tv_series: action.payload,
      };
    case SET_SEARCHING:
      return { ...state, setSearching: action.payload, filterLists: null };
    case FILTER_LISTS:
      return { ...state, filterLists: action.payload };
    default:
      return state;
  }
};
