export default function fetchResults(state) {
  return {
    type: 'SHOW_RESULTS',
    ...state
  };
};
