import { useState, useReducer, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbars from '@Components/Widgets/Navbars/Navbars';
import About from '@Components/About/About';
import Home from '@Components/Home/Home';
import Projects from '@Components/Projects/Projects';
import Resume from '@Components/Resume/Resume';
import Settings from '@Components/Settings/Settings';
import languageReducer from '@Reducers/languageReducer';
import locationReducer from '@Reducers/locationReducer';
import Spinner from '@Components/Widgets/Spinner/Spinner';
import Footer from '@Components/Widgets/Footer/Footer';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
const TRACKING_ID = '275356703';
ReactGA.initialize(TRACKING_ID);

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

console.log('history', history);

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

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  });

  return load ? (
    <div style={{ backgroundColor: 'white', width: '100vw', height: '100vh' }}>
      <Spinner load={load} />
    </div>
  ) : (
    <div style={{ height: '100vh', width: '100%', scrollBehavior: 'smooth' }}>
      <Navbars
        state={state}
        locationDispatch={locationDispatch}
        locationState={locationState}
        setTest={setTest}
      />
      <HashRouter>
        <Switch>
          <Route exact path="/portfolio" history={history}>
            <Home state={state} />
          </Route>
          <Route exact path="/portfolio/About" history={history}>
            <About state={state} />
          </Route>
          <Route exact path="/portfolio/Projects">
            <Projects state={state} />
          </Route>
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
