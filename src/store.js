import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const initialState = {
  results: [],
  pageSize: 50,
  page: 0,
  term: ''
};

const getResults = (state = initialState, action = '') => {
  console.log(state, action)
  // fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${term}`, { method: 'GET' })
  //   .then(response => response.json());
};

const reducers = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'SEARCH':
      // getResults(state, action);
      state.page++;
      return {
        ...state
      }
    break;
    default:

    break;
  }
};

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default store;

