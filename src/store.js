import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import showResults from './actions/ShowResults';

const initialState = {
  results: [],
  pageSize: 50,
  pageCount: 0,
  page: 0,
  term: ''
};

const getResults = (action = {}) => {
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${action.term}`, { method: 'GET' })
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
      const results = action.results;
      const pageCount = Math.ceil(action.paging.total / state.pageSize);
      const page = Math.ceil(action.paging.offset / state.pageSize) + 1;

      return {
        ...state,
        results,
        pageCount,
        page
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

