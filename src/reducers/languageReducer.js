export default function languageReducer(state, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      window.localStorage.setItem('lang', action.payload);
      return { ...state, lang: window.localStorage.getItem('lang') };
    default:
      break;
  }
}
