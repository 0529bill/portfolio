import { HashRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';

import About from '@Components/About/About';
import Footer from '@Components/Widgets/Footer/Footer';
import Home from '@Components/Home/Home';
import Navbars from '@Components/Widgets/Navbars/Navbars';
import Projects from '@Components/Projects/Projects';
import ReactGA from 'react-ga';
import Resume from '@Components/Resume/Resume';
import Settings from '@Components/Settings/Settings';
import Spinner from '@Components/Widgets/Spinner/Spinner';
import languageReducer from '@Reducers/languageReducer';
import locationReducer from '@Reducers/locationReducer';

const TRACKING_ID = 'UA-175814960-3';
ReactGA.initialize(TRACKING_ID, {
  siteSpeedSampleRate: 100,
  alwaysSendToDefaultTracker: true,
});

function App() {
  const [state, dispatch] = useReducer(languageReducer);
  const [locationState, locationDispatch] = useReducer(locationReducer, {
    location:
      window.location.hash === '#/portfolio/About' ||
      window.location.hash === '#/portfolio/Resume'
        ? 'about'
        : 'home',
  });
  const [load, setLoad] = useState(true);
  const [test, setTest] = useState(false);

  useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  });

  return load ? (
    <div
      style={{
        backgroundColor: 'white',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner load={load} />
    </div>
  ) : (
    <div style={{ height: '100vh', width: '100%', scrollBehavior: 'smooth' }}>
      <Navbars
        state={state}
        locationDispatch={locationDispatch}
        locationState={locationState}
        setTest={setTest}
        dispatch={dispatch}
        setLoad={setLoad}
      />
      <HashRouter>
        <Switch>
          {/* <Route exact path='/portfolio'>
            <Home state={state} />
          </Route> */}
          <Route exact path="/portfolio/About">
            <About state={state} />
          </Route>
          {/* <Route exact path="/portfolio/Projects">
            <Projects state={state} />
          </Route> */}
          <Route exact path="/portfolio/Resume">
            <Resume state={state} />
          </Route>
          <Route exact path="/portfolio/Settings">
            <Settings dispatch={dispatch} state={state} setLoad={setLoad} />
          </Route>
        </Switch>
      </HashRouter>
      <Footer locationState={locationState} />
    </div>
  );
}

export default App;
