import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import showResults from './actions/ShowResults';

const initialState = {
  results: [],
  pageSize: 50,
  totalPages: 0,
  page: 0,
  term: ''
};

const getResults = (action = {}) => {
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${action.term}`, { method: 'GET' })
    .then(response => response.json())
    .then(response => store.dispatch(showResults(response)));
};

const reducers = (state = initialState, action = {}) => {
  console.log(action)
  switch(action.type) {
    case 'FETCH_RESULTS':
      getResults(action);
      return state;
    break;
    case 'SHOW_RESULTS':
      state.results = action.results;
      state.totalPages = Math.ceil(action.paging.total / state.pageSize);
      state.page = Math.ceil(action.paging.offset / state.pageSize) + 1;

      return state;
    break;
    default:
      state.results = [];
      state.term = '';

      return  {
        ...state
      }
  }
};

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default store;

