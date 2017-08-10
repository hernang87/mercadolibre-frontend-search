export default function fetchResults(state) {
  return {
    type: 'FETCH_RESULTS',
    ...state
  };
};
