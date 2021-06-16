import en from '../data/en';
import tw from '../data/tw';

function i18n() {
  let data = window.localStorage.getItem('lang');
  let langBase = en;
  switch (data) {
    case 'tw':
      langBase = tw;
      break;
    case 'en':
      langBase = en;
      break;
    default:
      langBase = en;
      break;
  }

  function t(key) {
    let text = langBase[key];
    if (text === undefined || text.length === 0) {
      return `[NO_TRANSLATION_WITH_THIS_LANG]: [${key}]`;
    }
    return text;
  }

  return t;
}
export default i18n;
