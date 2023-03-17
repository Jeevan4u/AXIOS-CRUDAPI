export const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
  submit: false,
};

export const GetReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,

        error: true,
      };
    case "SUBMIT":
      return {
        ...state,
        submit: true,
      };
    default:
      return state;
  }
};
