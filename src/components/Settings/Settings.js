import react from 'react';
import i18n from '@Lang/i18n/i18n';
function Settings({ dispatch, state }) {
  let a = i18n();
  return (
    <>
      <h1>{a('frontend.local.title.settings')}</h1>
      <button onClick={() => dispatch({ type: 'SET_LANGUAGE', payload: 'en' })}>
        English
      </button>
      <button onClick={() => dispatch({ type: 'SET_LANGUAGE', payload: 'tw' })}>
        Chinese
      </button>
    </>
  );
}

export default Settings;
