import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import showResults from './actions/ShowResults';
import Config from './config';

const initialState = {
  items: [],
  term: ''
};

const getResults = (action = {}) => {
  fetch(Config.endpoints.items + action.term, { method: 'GET' })
    .then(response => response.json())
    .then(response => store.dispatch(showResults(response)));
};

const reducers = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'FETCH_RESULTS':
      getResults(action);

      return {
        ...state,
        term: action.term
      };
    case 'SHOW_RESULTS':
      const items = action.items;

      return {
        ...state,
        items
      };
    default:
      state.results = [];
      state.term = '';

      return state;
  }
};

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default store;

