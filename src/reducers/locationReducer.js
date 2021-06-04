export default function locationReducer(state, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    default:
      break;
  }
}
