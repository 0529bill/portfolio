import react, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import i18n from '@Lang/i18n/i18n';
import { GApageView } from '@GoogleAnalytics/googleAnalytics';
import './index.css';
function Settings({ dispatch, state, setLoad }) {
  let a = i18n();
  useEffect(() => GApageView('portfolio/Settings'), []);

  let handleEnglish = () => {
    setLoad(true);
    dispatch({ type: 'SET_LANGUAGE', payload: 'en' });
  };

  let handleChinese = () => {
    setLoad(true);
    dispatch({ type: 'SET_LANGUAGE', payload: 'tw' });
  };
  return (
    <>
      <Container fluid className="settings_container">
        <Container className="settings_container_main">
          <h1>{a('frontend.local.title.settings')}</h1>
          <Container>
            <div className="settings_language">Languages</div>
            <button
              className="settings_container_button1"
              onClick={() => handleEnglish()}
            >
              English
            </button>
            <button
              className="settings_container_button1"
              onClick={() => handleChinese()}
            >
              Chinese
            </button>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Settings;
